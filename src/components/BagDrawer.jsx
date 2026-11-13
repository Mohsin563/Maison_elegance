import { useEffect } from "react";
import { useBag } from "../context/BagContext";
import { formatPrice } from "../data/content";

export default function BagDrawer() {
  const { items, open, setOpen, remove, total, count } = useBag();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  return (
    <>
      <div className={`scrim ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open} aria-label="Shopping bag">
        <div className="drawer__head">
          <h3>Your bag ({count})</h3>
          <button onClick={() => setOpen(false)} aria-label="Close bag">
            ✕
          </button>
        </div>

        <div className="drawer__body">
          {items.length === 0 ? (
            <p className="drawer__empty">Your bag is empty.</p>
          ) : (
            <ul>
              {items.map((i) => (
                <li key={i.key}>
                  <div>
                    <strong>{i.name}</strong>
                    <small>
                      {[i.colour, i.size && `Size ${i.size}`, i.qty > 1 && `× ${i.qty}`]
                        .filter(Boolean)
                        .join(" · ")}
                    </small>
                  </div>
                  <div className="drawer__right">
                    <span>{formatPrice(i.price * i.qty)}</span>
                    <button onClick={() => remove(i.key)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="drawer__foot">
          <p>
            <span>Subtotal</span>
            <strong>{formatPrice(total)}</strong>
          </p>
          <button className="btn btn--solid btn--block" disabled={!items.length}>
            Proceed to checkout
          </button>
        </div>
      </aside>
    </>
  );
}
