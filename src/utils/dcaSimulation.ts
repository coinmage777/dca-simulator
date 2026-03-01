import {
  type CoinId,
  getPriceOnDate,
  getMonthlyPrices,
  getLastPrice,
  LAST_DATE,
} from '../data/coinPrices';

export type Frequency = 'weekly' | 'biweekly' | 'monthly';

const FREQUENCY_DAYS: Record<Frequency, number> = {
  weekly: 7,
  biweekly: 14,
  monthly: 30,
};

/** 시작일로부터 다음 매수일 계산 (매월은 해당 월의 1일) */
function addPeriod(date: Date, frequency: Frequency): Date {
  const next = new Date(date);
  if (frequency === 'monthly') {
    next.setMonth(next.getMonth() + 1);
    next.setDate(1);
    return next;
  }
  next.setDate(next.getDate() + FREQUENCY_DAYS[frequency]);
  return next;
}

export interface Purchase {
  date: string;
  amount: number;
  price: number;
  units: number;
  totalUnits: number;
  totalInvested: number;
}

export interface SimulationResult {
  purchases: Purchase[];
  totalInvested: number;
  totalUnits: number;
  currentValue: number;
  returnRate: number;
  chartData: { date: string; invested: number; value: number }[];
}

export function runDcaSimulation(
  coin: CoinId,
  startDate: string,
  amountPerPeriod: number,
  frequency: Frequency
): SimulationResult {
  const endDate = new Date(LAST_DATE);
  const purchases: Purchase[] = [];
  let current = new Date(startDate);
  let totalUnits = 0;
  let totalInvested = 0;

  while (current <= endDate) {
    const dateStr = current.toISOString().slice(0, 10);
    const price = getPriceOnDate(coin, dateStr);
    const units = amountPerPeriod / price;
    totalUnits += units;
    totalInvested += amountPerPeriod;
    purchases.push({
      date: dateStr,
      amount: amountPerPeriod,
      price,
      units,
      totalUnits,
      totalInvested,
    });
    current = addPeriod(current, frequency);
  }

  const lastPrice = getLastPrice(coin);
  const currentValue = totalUnits * lastPrice;
  const returnRate =
    totalInvested > 0 ? ((currentValue - totalInvested) / totalInvested) * 100 : 0;

  // 차트용: 월별 시점의 누적 투자금 vs 평가금액
  const monthlyPrices = getMonthlyPrices(coin);
  const chartData = monthlyPrices
    .map((p) => {
      const d = p.date;
      const price = p.price;
      const investedUpToDate = purchases
        .filter((q) => q.date <= d)
        .reduce((sum, q) => sum + q.amount, 0);
      const unitsUpToDate = purchases
        .filter((q) => q.date <= d)
        .reduce((sum, q) => sum + q.units, 0);
      const value = unitsUpToDate * price;
      return { date: d, invested: investedUpToDate, value };
    })
    .filter((row) => row.date >= startDate);

  return {
    purchases,
    totalInvested,
    totalUnits,
    currentValue,
    returnRate,
    chartData,
  };
}

export const AMOUNT_OPTIONS = [50_000, 100_000, 200_000, 500_000] as const;
export const START_OPTIONS = [
  '2022-01-01',
  '2022-07-01',
  '2023-01-01',
  '2023-07-01',
  '2024-01-01',
  '2024-07-01',
  '2025-01-01',
] as const;

/** 억/만 단위 표시 (1.3억원, 360만원, 1,280만원) */
export function formatKrw(n: number): string {
  if (n >= 100_000_000) return `${(n / 100_000_000).toFixed(1)}억원`;
  if (n >= 10_000) return `${Math.round(n / 10_000).toLocaleString()}만원`;
  return `${n.toLocaleString()}원`;
}

/** 수익/손실 금액 표시용 (+1,280만원 / -50만원) */
export function formatKrwSigned(n: number): string {
  const abs = Math.abs(n);
  const sign = n >= 0 ? '+' : '-';
  if (abs >= 100_000_000) return `${sign}${(abs / 100_000_000).toFixed(1)}억원`;
  if (abs >= 10_000) return `${sign}${(abs / 10_000).toLocaleString()}만원`;
  return `${sign}${abs.toLocaleString()}원`;
}
