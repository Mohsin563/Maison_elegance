import Placeholder from "./Placeholder";
import SectionLabel from "./SectionLabel";
import useReveal from "../hooks/useReveal";
import { editorial } from "../data/content";

export default function Editorial() {
  const ref = useReveal();
  return (
    <section className="section editorial reveal" ref={ref}>
      <div className="container">
        <SectionLabel no="02">{editorial.issue}</SectionLabel>

        <h2 className="editorial__title">
          THE NEW
          <em>Collection</em>
        </h2>

        <div className="editorial__grid">
          <div className="editorial__figure">
            <Placeholder tone="sand" label={editorial.caption} alt="Editorial look" />
            <span className="editorial__badge">{editorial.badge}</span>
          </div>

          <div className="editorial__copy">
            <blockquote>“{editorial.quote}”</blockquote>
            <p>{editorial.body}</p>
            <dl>
              <div>
                <dt>Looks</dt>
                <dd>{editorial.looks}</dd>
              </div>
              <div>
                <dt>Photographed by</dt>
                <dd>{editorial.photographer}</dd>
              </div>
              <div>
                <dt>Available from</dt>
                <dd>{editorial.available}</dd>
              </div>
            </dl>
            <a href="#best-sellers" className="btn btn--solid">
              Shop the collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
