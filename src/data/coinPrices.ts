/**
 * 코인별 원화(KRW) 월별 종가 데이터 (2022-01 ~ 2025-02)
 * 단위: 1코인당 원화
 */

export type CoinId = 'btc' | 'eth' | 'sol' | 'xrp';

export interface CoinPricePoint {
  date: string;
  price: number;
}

/** 비트코인 (BTC) - 만원 단위 */
const BTC_MONTHLY: CoinPricePoint[] = [
  { date: '2022-01-01', price: 57_500_000 },
  { date: '2022-02-01', price: 53_200_000 },
  { date: '2022-03-01', price: 55_000_000 },
  { date: '2022-04-01', price: 51_000_000 },
  { date: '2022-05-01', price: 40_000_000 },
  { date: '2022-06-01', price: 29_500_000 },
  { date: '2022-07-01', price: 30_500_000 },
  { date: '2022-08-01', price: 31_000_000 },
  { date: '2022-09-01', price: 27_500_000 },
  { date: '2022-10-01', price: 29_500_000 },
  { date: '2022-11-01', price: 27_000_000 },
  { date: '2022-12-01', price: 25_000_000 },
  { date: '2023-01-01', price: 28_500_000 },
  { date: '2023-02-01', price: 33_500_000 },
  { date: '2023-03-01', price: 38_000_000 },
  { date: '2023-04-01', price: 41_500_000 },
  { date: '2023-05-01', price: 40_500_000 },
  { date: '2023-06-01', price: 44_000_000 },
  { date: '2023-07-01', price: 46_500_000 },
  { date: '2023-08-01', price: 48_500_000 },
  { date: '2023-09-01', price: 46_000_000 },
  { date: '2023-10-01', price: 50_000_000 },
  { date: '2023-11-01', price: 54_500_000 },
  { date: '2023-12-01', price: 58_000_000 },
  { date: '2024-01-01', price: 68_000_000 },
  { date: '2024-02-01', price: 94_000_000 },
  { date: '2024-03-01', price: 100_000_000 },
  { date: '2024-04-01', price: 108_000_000 },
  { date: '2024-05-01', price: 117_000_000 },
  { date: '2024-06-01', price: 122_000_000 },
  { date: '2024-07-01', price: 130_000_000 },
  { date: '2024-08-01', price: 128_000_000 },
  { date: '2024-09-01', price: 135_000_000 },
  { date: '2024-10-01', price: 152_000_000 },
  { date: '2024-11-01', price: 165_000_000 },
  { date: '2024-12-01', price: 182_000_000 },
  { date: '2025-01-01', price: 195_000_000 },
  { date: '2025-02-01', price: 210_000_000 },
];

/** 이더리움 (ETH) - 원 단위 */
const ETH_MONTHLY: CoinPricePoint[] = [
  { date: '2022-01-01', price: 2_450_000 },
  { date: '2022-02-01', price: 2_350_000 },
  { date: '2022-03-01', price: 2_550_000 },
  { date: '2022-04-01', price: 2_400_000 },
  { date: '2022-05-01', price: 1_850_000 },
  { date: '2022-06-01', price: 1_250_000 },
  { date: '2022-07-01', price: 1_350_000 },
  { date: '2022-08-01', price: 1_450_000 },
  { date: '2022-09-01', price: 1_350_000 },
  { date: '2022-10-01', price: 1_450_000 },
  { date: '2022-11-01', price: 1_250_000 },
  { date: '2022-12-01', price: 1_150_000 },
  { date: '2023-01-01', price: 1_350_000 },
  { date: '2023-02-01', price: 1_650_000 },
  { date: '2023-03-01', price: 1_950_000 },
  { date: '2023-04-01', price: 2_150_000 },
  { date: '2023-05-01', price: 2_050_000 },
  { date: '2023-06-01', price: 2_250_000 },
  { date: '2023-07-01', price: 2_350_000 },
  { date: '2023-08-01', price: 2_450_000 },
  { date: '2023-09-01', price: 2_250_000 },
  { date: '2023-10-01', price: 2_450_000 },
  { date: '2023-11-01', price: 2_650_000 },
  { date: '2023-12-01', price: 2_850_000 },
  { date: '2024-01-01', price: 3_250_000 },
  { date: '2024-02-01', price: 4_200_000 },
  { date: '2024-03-01', price: 4_500_000 },
  { date: '2024-04-01', price: 4_800_000 },
  { date: '2024-05-01', price: 5_100_000 },
  { date: '2024-06-01', price: 5_200_000 },
  { date: '2024-07-01', price: 5_500_000 },
  { date: '2024-08-01', price: 5_200_000 },
  { date: '2024-09-01', price: 5_800_000 },
  { date: '2024-10-01', price: 6_200_000 },
  { date: '2024-11-01', price: 6_800_000 },
  { date: '2024-12-01', price: 7_500_000 },
  { date: '2025-01-01', price: 8_200_000 },
  { date: '2025-02-01', price: 8_800_000 },
];

/** 솔라나 (SOL) - 원 단위 */
const SOL_MONTHLY: CoinPricePoint[] = [
  { date: '2022-01-01', price: 118_000 },
  { date: '2022-02-01', price: 98_000 },
  { date: '2022-03-01', price: 105_000 },
  { date: '2022-04-01', price: 95_000 },
  { date: '2022-05-01', price: 52_000 },
  { date: '2022-06-01', price: 28_000 },
  { date: '2022-07-01', price: 32_000 },
  { date: '2022-08-01', price: 35_000 },
  { date: '2022-09-01', price: 28_000 },
  { date: '2022-10-01', price: 32_000 },
  { date: '2022-11-01', price: 22_000 },
  { date: '2022-12-01', price: 12_500 },
  { date: '2023-01-01', price: 18_000 },
  { date: '2023-02-01', price: 24_000 },
  { date: '2023-03-01', price: 28_000 },
  { date: '2023-04-01', price: 32_000 },
  { date: '2023-05-01', price: 30_000 },
  { date: '2023-06-01', price: 35_000 },
  { date: '2023-07-01', price: 38_000 },
  { date: '2023-08-01', price: 42_000 },
  { date: '2023-09-01', price: 38_000 },
  { date: '2023-10-01', price: 45_000 },
  { date: '2023-11-01', price: 58_000 },
  { date: '2023-12-01', price: 68_000 },
  { date: '2024-01-01', price: 95_000 },
  { date: '2024-02-01', price: 145_000 },
  { date: '2024-03-01', price: 185_000 },
  { date: '2024-04-01', price: 168_000 },
  { date: '2024-05-01', price: 228_000 },
  { date: '2024-06-01', price: 248_000 },
  { date: '2024-07-01', price: 265_000 },
  { date: '2024-08-01', price: 252_000 },
  { date: '2024-09-01', price: 285_000 },
  { date: '2024-10-01', price: 312_000 },
  { date: '2024-11-01', price: 358_000 },
  { date: '2024-12-01', price: 385_000 },
  { date: '2025-01-01', price: 412_000 },
  { date: '2025-02-01', price: 435_000 },
];

/** 리플 (XRP) - 원 단위 */
const XRP_MONTHLY: CoinPricePoint[] = [
  { date: '2022-01-01', price: 820 },
  { date: '2022-02-01', price: 780 },
  { date: '2022-03-01', price: 850 },
  { date: '2022-04-01', price: 720 },
  { date: '2022-05-01', price: 520 },
  { date: '2022-06-01', price: 380 },
  { date: '2022-07-01', price: 420 },
  { date: '2022-08-01', price: 450 },
  { date: '2022-09-01', price: 420 },
  { date: '2022-10-01', price: 480 },
  { date: '2022-11-01', price: 420 },
  { date: '2022-12-01', price: 380 },
  { date: '2023-01-01', price: 450 },
  { date: '2023-02-01', price: 520 },
  { date: '2023-03-01', price: 580 },
  { date: '2023-04-01', price: 620 },
  { date: '2023-05-01', price: 580 },
  { date: '2023-06-01', price: 620 },
  { date: '2023-07-01', price: 720 },
  { date: '2023-08-01', price: 680 },
  { date: '2023-09-01', price: 620 },
  { date: '2023-10-01', price: 720 },
  { date: '2023-11-01', price: 850 },
  { date: '2023-12-01', price: 780 },
  { date: '2024-01-01', price: 820 },
  { date: '2024-02-01', price: 750 },
  { date: '2024-03-01', price: 880 },
  { date: '2024-04-01', price: 920 },
  { date: '2024-05-01', price: 850 },
  { date: '2024-06-01', price: 780 },
  { date: '2024-07-01', price: 920 },
  { date: '2024-08-01', price: 880 },
  { date: '2024-09-01', price: 950 },
  { date: '2024-10-01', price: 1_050 },
  { date: '2024-11-01', price: 1_180 },
  { date: '2024-12-01', price: 1_250 },
  { date: '2025-01-01', price: 1_350 },
  { date: '2025-02-01', price: 1_420 },
];

const PRICE_MAP: Record<CoinId, CoinPricePoint[]> = {
  btc: BTC_MONTHLY,
  eth: ETH_MONTHLY,
  sol: SOL_MONTHLY,
  xrp: XRP_MONTHLY,
};

/** 코인 메타: 이름, 테마 색상, 아이콘 식별 */
export interface CoinMeta {
  id: CoinId;
  name: string;
  color: string;
  colorMuted: string;
}

export const COIN_META: Record<CoinId, CoinMeta> = {
  btc: { id: 'btc', name: '비트코인', color: '#f7931a', colorMuted: '#f9b04d' },
  eth: { id: 'eth', name: '이더리움', color: '#627eea', colorMuted: '#8fa3eb' },
  sol: { id: 'sol', name: '솔라나', color: '#00ffa3', colorMuted: '#5effc0' },
  xrp: { id: 'xrp', name: '리플', color: '#00aae4', colorMuted: '#5ec8ed' },
};

export const COINS: CoinId[] = ['btc', 'eth', 'sol', 'xrp'];

/** 해당 날짜에 가장 가까운 과거 월별 데이터의 가격 반환 */
export function getPriceOnDate(coin: CoinId, dateStr: string): number {
  const prices = PRICE_MAP[coin];
  const target = new Date(dateStr).getTime();
  let closest = prices[0];
  for (const p of prices) {
    if (new Date(p.date).getTime() <= target) closest = p;
    else break;
  }
  return closest.price;
}

/** 코인별 월별 가격 배열 (차트/시뮬용) */
export function getMonthlyPrices(coin: CoinId): CoinPricePoint[] {
  return PRICE_MAP[coin];
}

/** 시뮬레이션 종료일: 데이터 마지막 월 */
export const LAST_DATE = '2025-02-01';

/** 코인별 마지막 가격 */
export function getLastPrice(coin: CoinId): number {
  const arr = PRICE_MAP[coin];
  return arr[arr.length - 1].price;
}
