import { useState } from "react";
import Placeholder from "./Placeholder";
import SectionLabel from "./SectionLabel";
import useReveal from "../hooks/useReveal";
import { steps } from "../data/content";

export default function BehindDesign() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="section behind reveal" ref={ref}>
      <div className="container">
        <SectionLabel no="06">Behind the design</SectionLabel>
        <h2 className="display">
          From a single line <em>to the runway.</em>
        </h2>

        <div className="behind__grid">
          <ol className="behind__list">
            {steps.map((s, i) => (
              <li key={s.no} className={i === active ? "is-active" : ""}>
                <button onClick={() => setActive(i)} aria-expanded={i === active}>
                  <span>{s.no}</span>
                  <h3>{s.title}</h3>
                </button>
                <div className="behind__body">
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="behind__figure">
            <Placeholder
              key={step.no}
              tone={step.tone}
              label={`${step.no} — ${step.title}`}
              alt={step.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
