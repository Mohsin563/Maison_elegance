import SectionLabel from "./SectionLabel";
import useReveal from "../hooks/useReveal";
import { story } from "../data/content";

export default function Story() {
  const ref = useReveal();
  return (
    <section className="section story reveal" id="story" ref={ref}>
      <div className="container">
        <SectionLabel no="08" light>
          Our story
        </SectionLabel>
        <p className="story__text">{story.text}</p>

        <div className="story__founder">
          <span className="story__avatar" aria-hidden="true">
            EM
          </span>
          <div>
            <strong>{story.founder}</strong>
            <small>{story.role}</small>
          </div>
        </div>

        <ul className="story__stats">
          {story.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
