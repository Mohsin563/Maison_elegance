import Placeholder from "./Placeholder";
import { products, formatPrice } from "../data/content";

export default function Hero() {
  const featured = products[0];
  return (
    <section className="hero" id="top">
      <div className="hero__wordmark" aria-hidden="true">
        MAISON
      </div>

      <div className="hero__top">
        <span>Maison fondée à Paris — 1987</span>
        <span>Printemps–Été 2025 · Chapitre IV</span>
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          <h1>
            BEYOND THE
            <em>ORDINARY.</em>
          </h1>
          <p>
            An expression of elegance.
            <br />A celebration of individuality.
          </p>
          <div className="hero__cta">
            <a href="#collections" className="btn btn--solid">
              Explore Collection
            </a>
            <a href="#story" className="btn btn--ghost">
              Discover our story
            </a>
          </div>
        </div>

        <div className="hero__figure">
          <Placeholder tone="camel" label="Look N° 07 · SS25" alt="Model wearing Manteau Aurore" />
        </div>

        <aside className="hero__card">
          <p className="hero__card-kicker">Look N° 07 SS25</p>
          <h3>{featured.name}</h3>
          <p>{featured.desc}</p>
          <p className="hero__card-price">{formatPrice(featured.price)}</p>
          <a href="#best-sellers">Shop the look →</a>
        </aside>
      </div>

      <a href="#collections" className="hero__scroll">
        Scroll to discover
      </a>
    </section>
  );
}
