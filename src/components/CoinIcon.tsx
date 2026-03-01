import { type CoinId, COIN_META } from '../data/coinPrices';

interface CoinIconProps {
  coin: CoinId;
  size?: number;
  className?: string;
}

export function CoinIcon({ coin, size = 32, className = '' }: CoinIconProps) {
  const meta = COIN_META[coin];
  const color = meta.color;

  const icons: Record<CoinId, React.ReactNode> = {
    btc: (
      <svg viewBox="0 0 32 32" width={size} height={size} className={className}>
        <circle cx="16" cy="16" r="14" fill={color} opacity={0.2} />
        <path
          fill={color}
          d="M23.5 14.1c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.7-.4-.6 2.6c-.4-.1-.9-.2-1.4-.3l.6-2.5-1.7-.4-.7 2.7c-.4-.1-.7-.2-1-.3V8.2l-1.5-.4-.3 1.2s.9.2.9.2c.5.1.6.2.6.5l-.7 2.6c-.1 0-.2-.1-.4-.1l-.4-.1-1.2 4.5c-.1.2 0 .5.3.6.1 0 .2 0 .3 0l-.8 3.1c0 .2.1.3.2.4.1.1.3.1.5 0 .2 0 .5-.1.7-.2l.7-2.6c.4.1.8.2 1.2.3l-.7 2.6c-.1.2 0 .5.3.6.2.1.2.1.3.1.1 0 .2 0 .3 0l-.8 3.1c-.1.3 0 .5.2.6.2.2.5.2.8.1.4-.1.8-.2 1.2-.3l.7-2.7 1.7.4-.7 2.7c2.1.4 3.6.2 4.3-1.6.5-1.4 0-2.2-1-2.8.8-.2 1.4-.7 1.5-1.8zm-3.9 5.4l.9-3.6c.2-.9.1-1.7-.4-2.3-.5-.6-1.3-.9-2.4-.7l-.9 3.5c.5.1 1 .3 1.4.5.9.5 1.3 1.4 1.4 2.6zm.9-5.5l.8-3.2c.1-.4 0-.8-.2-1-.3-.4-.8-.5-1.6-.4l-.8 3.1c.4.1.8.2 1 .4.4.3.5.7.8 1.1z"
        />
      </svg>
    ),
    eth: (
      <svg viewBox="0 0 32 32" width={size} height={size} className={className}>
        <circle cx="16" cy="16" r="14" fill={color} opacity={0.2} />
        <path
          fill={color}
          d="M16 5v8.9l7.5 3.3L16 5zM16 22v5l7.5-10.2L16 22zm0-1.2V14L8.5 17.8 16 20.8zM16 13V5L8.5 17.2 16 13zm0 1l7.5 3.8L16 22.1v-8.1zM8.5 17.2L16 14v6.8l-7.5-3.6z"
        />
      </svg>
    ),
    sol: (
      <svg viewBox="0 0 32 32" width={size} height={size} className={className}>
        <circle cx="16" cy="16" r="14" fill={color} opacity={0.2} />
        <path
          d="M9.5 20.2L16 8.5l6.5 11.7H9.5zM16 23.5l6.5-3.2-6.5-11.8L9.5 20.3 16 23.5z"
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    xrp: (
      <svg viewBox="0 0 32 32" width={size} height={size} className={className}>
        <circle cx="16" cy="16" r="14" fill={color} opacity={0.2} />
        <path
          fill={color}
          d="M10 9l4 6-4 6h3l4-6 4 6h3l-4-6 4-6h-3l-4 6-4-6h-3zm12 14H10l2-3h10l2 3z"
        />
      </svg>
    ),
  };

  return <span className={`coin-icon ${className}`}>{icons[coin]}</span>;
}
