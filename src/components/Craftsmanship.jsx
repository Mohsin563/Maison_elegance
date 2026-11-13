import Placeholder from "./Placeholder";
import SectionLabel from "./SectionLabel";
import useReveal from "../hooks/useReveal";
import { craft } from "../data/content";

export default function Craftsmanship() {
  const ref = useReveal();
  return (
    <section className="section craft reveal" id="craftsmanship" ref={ref}>
      <div className="container craft__grid">
        <div className="craft__figure">
          <Placeholder tone="sand" label="Hand embroidery, Paris" alt="Artisan embroidering by hand" />
        </div>

        <div className="craft__copy">
          <SectionLabel no="05">Savoir-faire</SectionLabel>
          <h2 className="display">
            The Art of <em>Craftsmanship</em>
          </h2>
          <p>{craft.intro}</p>

          <ul className="craft__stats">
            {craft.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <ul className="craft__materials">
            {craft.materials.map((m) => (
              <li key={m.name}>
                <h4>{m.name}</h4>
                <p>{m.origin}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
