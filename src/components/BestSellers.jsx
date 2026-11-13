import { useState } from "react";
import Placeholder from "./Placeholder";
import SectionLabel from "./SectionLabel";
import useReveal from "../hooks/useReveal";
import { useBag } from "../context/BagContext";
import { products, productFilters, formatPrice, sizes } from "../data/content";

export default function BestSellers() {
  const ref = useReveal();
  const { add } = useBag();
  const [filter, setFilter] = useState("All");
  const visible = products.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="section bestsellers reveal" id="best-sellers" ref={ref}>
      <div className="container">
        <div className="bestsellers__head">
          <div>
            <SectionLabel no="03">Most desired</SectionLabel>
            <h2 className="display">
              Best <em>Sellers</em>
            </h2>
          </div>
          <div className="filters" role="tablist" aria-label="Filter products">
            {productFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={filter === f ? "is-active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="products">
          {visible.map((p) => (
            <article className="product" key={p.id}>
              <div className="product__media">
                <Placeholder tone={p.tone} src={p.image} alt={p.name} />
                <button
                  className="product__add"
                  onClick={() => add({ id: p.id, name: p.name, price: p.price, size: sizes[2] })}
                >
                  Add to bag
                </button>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <strong>{formatPrice(p.price)}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
