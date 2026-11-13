import { ticker } from "../data/content";

export default function Ticker() {
  const items = [...ticker, ...ticker, ...ticker];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((t, i) => (
          <span key={i}>
            {t} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}
