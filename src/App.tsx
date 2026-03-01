import { useMemo, useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts';
import {
  runDcaSimulation,
  AMOUNT_OPTIONS,
  START_OPTIONS,
  formatKrw,
  formatKrwSigned,
  type Frequency,
} from './utils/dcaSimulation';
import { type CoinId, COINS, COIN_META, LAST_DATE } from './data/coinPrices';
import { CoinIcon } from './components/CoinIcon';
import './App.css';

const FREQUENCY_LABELS: Record<Frequency, string> = {
  weekly: '매주',
  biweekly: '격주',
  monthly: '매월',
};

const START_LABELS: Record<string, string> = {
  '2022-01-01': '2022년 1월',
  '2022-07-01': '2022년 7월',
  '2023-01-01': '2023년 1월',
  '2023-07-01': '2023년 7월',
  '2024-01-01': '2024년 1월',
  '2024-07-01': '2024년 7월',
  '2025-01-01': '2025년 1월',
};

function App() {
  const [coin, setCoin] = useState<CoinId>('btc');
  const [amount, setAmount] = useState(100_000);
  const [frequency, setFrequency] = useState<Frequency>('weekly');
  const [startDate, setStartDate] = useState('2022-01-01');

  const theme = COIN_META[coin];

  const result = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(LAST_DATE);
    if (start > end) return null;
    return runDcaSimulation(coin, startDate, amount, frequency);
  }, [coin, startDate, amount, frequency]);

  const chartData = result?.chartData ?? [];
  const profitLoss = result ? result.currentValue - result.totalInvested : 0;
  const isProfit = profitLoss >= 0;
  const comparisonChartData = result
    ? [
        { name: '투자원금', value: result.totalInvested, fill: 'var(--muted)' },
        { name: '평가금액', value: result.currentValue, fill: isProfit ? 'var(--positive)' : 'var(--negative)' },
      ]
    : [];

  return (
    <div className={`app theme-${coin}`}>
      <header className="header">
        <h1 className="title">암호화폐 분할매수 시뮬레이터</h1>
        <p className="subtitle">과거 월별 데이터 기반 DCA 수익률 시뮬레이션 (원화 기준)</p>
      </header>

      <section className="controls">
        <div className="control-group">
          <label className="label">코인 선택</label>
          <div className="coin-selector">
            {COINS.map((c) => (
              <button
                key={c}
                type="button"
                className={`coin-btn ${coin === c ? 'active' : ''}`}
                onClick={() => setCoin(c)}
                style={
                  coin === c
                    ? {
                        borderColor: COIN_META[c].color,
                        backgroundColor: `${COIN_META[c].color}18`,
                        color: COIN_META[c].color,
                      }
                    : undefined
                }
              >
                <CoinIcon coin={c} size={28} />
                <span>{COIN_META[c].name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label className="label">1회 투자금액</label>
          <div className="option-grid">
            {AMOUNT_OPTIONS.map((a) => (
              <button
                key={a}
                type="button"
                className={`option-btn ${amount === a ? 'active' : ''}`}
                onClick={() => setAmount(a)}
              >
                {a >= 10_000 ? `${a / 10_000}만원` : `${a.toLocaleString()}원`}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label className="label">매수 주기</label>
          <div className="option-row">
            {(Object.keys(FREQUENCY_LABELS) as Frequency[]).map((f) => (
              <button
                key={f}
                type="button"
                className={`option-btn ${frequency === f ? 'active' : ''}`}
                onClick={() => setFrequency(f)}
              >
                {FREQUENCY_LABELS[f]}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label className="label">시작 시점</label>
          <select
            className="select"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          >
            {START_OPTIONS.map((d) => (
              <option key={d} value={d}>
                {START_LABELS[d]}
              </option>
            ))}
          </select>
        </div>
      </section>

      {result && (
        <div className="result-block">
          <div className="result-hero">
            <span className="result-hero-label">예상 수익금</span>
            <span className={`result-hero-amount ${isProfit ? 'positive' : 'negative'}`}>
              {formatKrwSigned(profitLoss)}
            </span>
          </div>

          <section className="summary">
            <div className="summary-card summary-card-1">
              <span className="summary-label">총 투자금액</span>
              <span className="summary-value">{formatKrw(result.totalInvested)}</span>
            </div>
            <div className="summary-card summary-card-2">
              <span className="summary-label">현재 평가금액</span>
              <span className={`summary-value ${isProfit ? 'positive' : 'negative'}`}>
                {formatKrw(result.currentValue)}
              </span>
            </div>
            <div className="summary-card summary-card-3">
              <span className="summary-label">수익률</span>
              <span className={`summary-value ${isProfit ? 'positive' : 'negative'}`}>
                {result.returnRate >= 0 ? '+' : ''}
                {result.returnRate.toFixed(1)}%
              </span>
            </div>
          </section>

          <section className="chart-section chart-comparison">
            <h2 className="chart-title">평가금액 vs 투자원금</h2>
            <div className="chart-wrap chart-wrap-bar">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={comparisonChartData}
                  layout="vertical"
                  margin={{ top: 8, right: 24, left: 80, bottom: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--grid)" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={72}
                    stroke="var(--muted)"
                    tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'var(--surface-solid)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                    }}
                    formatter={(value: number) => [formatKrw(value), '']}
                    cursor={{ fill: 'rgba(255,255,255,0.04)' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={36} isAnimationActive animationDuration={600}>
                    {comparisonChartData.map((entry, index) => (
                      <Cell key={index} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="chart-section chart-timeline">
            <h2 className="chart-title">누적 투자금 vs 평가금액 추이</h2>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart
                  data={chartData}
                  margin={{ top: 12, right: 20, left: 12, bottom: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--grid)" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(v) => v.slice(0, 7)}
                    stroke="var(--muted)"
                    tick={{ fill: 'var(--muted)', fontSize: 11 }}
                  />
                  <YAxis
                    stroke="var(--muted)"
                    tick={{ fill: 'var(--muted)', fontSize: 11 }}
                    tickFormatter={(v) =>
                      v >= 1_000_000 ? `${(v / 1_000_000).toFixed(0)}M` : `${(v / 10_000).toFixed(0)}만`}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload?.length || !label) return null;
                      const [y, m] = String(label).split('-').map(Number);
                      return (
                        <div className="chart-tooltip">
                          <div className="chart-tooltip-title">해당 월 상세 정보</div>
                          <div className="chart-tooltip-date">{y}년 {m}월</div>
                          <div className="chart-tooltip-rows">
                            <div className="chart-tooltip-row">
                              <span>누적 투자금</span>
                              <span>{formatKrw(Number(payload.find((p) => p.name === 'invested')?.value ?? 0))}</span>
                            </div>
                            <div className="chart-tooltip-row">
                              <span>평가금액</span>
                              <span>{formatKrw(Number(payload.find((p) => p.name === 'value')?.value ?? 0))}</span>
                            </div>
                          </div>
                        </div>
                      );
                    }}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: 8 }}
                    formatter={(value) => (value === 'invested' ? '누적 투자금' : '평가금액')}
                    iconType="line"
                    iconSize={10}
                    style={{ color: 'var(--muted)' }}
                  />
                  <ReferenceLine y={result.totalInvested} stroke="var(--muted)" strokeDasharray="2 2" />
                  <Line
                    type="monotone"
                    dataKey="invested"
                    stroke="var(--accent-muted)"
                    strokeWidth={2}
                    dot={false}
                    name="invested"
                    isAnimationActive
                    animationDuration={800}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--accent)"
                    strokeWidth={2}
                    dot={false}
                    name="value"
                    isAnimationActive
                    animationDuration={800}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="chart-note">
              기준일: {LAST_DATE} ({theme.name} 월별 원화 종가 데이터)
            </p>
          </section>
        </div>
      )}

      {!result && (
        <p className="empty-state">선택한 시작일이 데이터 종료일({LAST_DATE}) 이후입니다.</p>
      )}

      <footer className="footer">
        <span>본 시뮬레이션은 과거 데이터 기반이며 미래 수익을 보장하지 않습니다.</span>
      </footer>
    </div>
  );
}

export default App;
