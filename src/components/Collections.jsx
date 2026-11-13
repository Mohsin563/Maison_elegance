import Placeholder from "./Placeholder";
import SectionLabel from "./SectionLabel";
import useReveal from "../hooks/useReveal";
import { collections } from "../data/content";

function Tile({ c }) {
  return (
    <a href={`#${c.id}`} className={`tile tile--${c.id}`}>
      <Placeholder tone={c.tone} src={c.image} alt={`${c.title} collection`} className="tile__img" />
      <div className="tile__overlay">
        <p className="tile__kicker">
          {c.no} — {c.kicker}
        </p>
        <h3>{c.title}</h3>
        {c.tagline && <p className="tile__tag">{c.tagline}</p>}
        {c.id === "accessoires" && <span className="tile__open">Open the chapter →</span>}
      </div>
    </a>
  );
}

export default function Collections() {
  const ref = useReveal();
  return (
    <section className="section collections reveal" id="collections" ref={ref}>
      <div className="container">
        <div className="collections__head">
          <div>
            <SectionLabel no="01">Les Collections</SectionLabel>
            <h2 className="display">
              Six worlds, one
              <em> maison.</em>
            </h2>
          </div>
          <div className="collections__intro">
            <p>
              Each collection is composed as its own chapter — a distinct light, a distinct
              silhouette, a distinct emotion. Hover to step inside; select to open the chapter.
            </p>
            <small>238 pieces · Printemps–Été 2025</small>
          </div>
        </div>

        <div className="collections__grid">
          {collections.map((c) => (
            <Tile key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
