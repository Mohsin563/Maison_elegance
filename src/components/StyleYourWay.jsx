import { useMemo, useState } from "react";
import Placeholder from "./Placeholder";
import SectionLabel from "./SectionLabel";
import useReveal from "../hooks/useReveal";
import { useBag } from "../context/BagContext";
import { products, sizes, formatPrice } from "../data/content";

export default function StyleYourWay() {
  const ref = useReveal();
  const { add } = useBag();
  const [picked, setPicked] = useState(() => Object.fromEntries(products.map((p) => [p.id, true])));
  const [size, setSize] = useState(() => Object.fromEntries(products.map((p) => [p.id, "38"])));

  const selected = useMemo(() => products.filter((p) => picked[p.id]), [picked]);
  const total = selected.reduce((n, p) => n + p.price, 0);

  return (
    <section className="section style reveal" ref={ref}>
      <div className="container style__grid">
        <div className="style__figure">
          <Placeholder tone="bone" label="The complete look" alt="Complete look" />
        </div>

        <div className="style__panel">
          <SectionLabel no="07">Style your way</SectionLabel>
          <h2 className="display">
            Style <em>your way.</em>
          </h2>
          <p>
            Take the complete look, or only the pieces that speak to you. Select, choose your
            size, and compose your own silhouette.
          </p>

          <ul className="style__list">
            {products.map((p) => (
              <li key={p.id} className={picked[p.id] ? "is-on" : ""}>
                <label>
                  <input
                    type="checkbox"
                    checked={picked[p.id]}
                    onChange={() => setPicked((s) => ({ ...s, [p.id]: !s[p.id] }))}
                  />
                  <span className="check" aria-hidden="true" />
                  <span className="style__name">{p.name}</span>
                </label>
                <span className="style__price">{formatPrice(p.price)}</span>
                <select
                  aria-label={`Size for ${p.name}`}
                  value={size[p.id]}
                  onChange={(e) => setSize((s) => ({ ...s, [p.id]: e.target.value }))}
                >
                  {sizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </li>
            ))}
          </ul>

          <div className="style__total">
            <span>
              {selected.length} piece{selected.length === 1 ? "" : "s"} selected
            </span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <button
            className="btn btn--solid btn--block"
            disabled={!selected.length}
            onClick={() =>
              add(selected.map((p) => ({ id: p.id, name: p.name, price: p.price, size: size[p.id] })))
            }
          >
            Add the look to bag
          </button>
        </div>
      </div>
    </section>
  );
}
