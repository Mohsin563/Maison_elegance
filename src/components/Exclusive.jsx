import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { exclusive } from "../data/content";

export default function Exclusive() {
  const ref = useReveal();
  const [requested, setRequested] = useState(false);
  const pct = ((exclusive.total - exclusive.remaining) / exclusive.total) * 100;

  return (
    <section className="section exclusive reveal" ref={ref}>
      <div className="exclusive__veil" />
      <div className="container exclusive__inner">
        <p className="exclusive__kicker">( 09 ) — {exclusive.kicker}</p>
        <h2>{exclusive.title}</h2>
        <p className="exclusive__text">{exclusive.text}</p>

        <div className="exclusive__meter" aria-label={`Remaining ${exclusive.remaining} of ${exclusive.total}`}>
          <div style={{ width: `${pct}%` }} />
        </div>
        <p className="exclusive__remaining">
          Remaining {exclusive.remaining} / {exclusive.total}
        </p>

        <div className="exclusive__cta">
          <button className="btn btn--gold" onClick={() => setRequested(true)} disabled={requested}>
            {requested ? "Request received" : "Request a private appointment"}
          </button>
          <a href="#collections" className="btn btn--ghost btn--light">
            View the pieces
          </a>
        </div>
        <small className="exclusive__coords">{exclusive.coords}</small>
      </div>
    </section>
  );
}
