import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";
import useReveal from "../hooks/useReveal";
import { useBag } from "../context/BagContext";
import { bag, formatPrice } from "../data/content";

const LAYERS = 14; // stacked slices create the illusion of depth

function Bag3D({ colour, angle, onDrag }) {
  const dragging = useRef(false);
  const lastX = useRef(0);

  const down = (e) => {
    dragging.current = true;
    lastX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const move = (e) => {
    if (!dragging.current) return;
    onDrag(e.clientX - lastX.current);
    lastX.current = e.clientX;
  };
  const up = () => (dragging.current = false);

  return (
    <div
      className="bag3d"
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      role="img"
      aria-label="Interactive 3D view of Le Sac Lune. Drag to rotate."
    >
      <div className="bag3d__stage" style={{ transform: `rotateX(-8deg) rotateY(${angle}deg)` }}>
        {Array.from({ length: LAYERS }).map((_, i) => {
          const z = (i - LAYERS / 2) * 5;
          const shade = Math.abs(i - LAYERS / 2) / (LAYERS / 2);
          return (
            <div
              key={i}
              className="bag3d__layer"
              style={{
                transform: `translateZ(${z}px)`,
                background: colour,
                filter: `brightness(${1 - shade * 0.18})`,
              }}
            >
              {i === LAYERS - 1 && <span className="bag3d__clasp" />}
            </div>
          );
        })}
        <div className="bag3d__strap" />
      </div>
      <div className="bag3d__shadow" />
    </div>
  );
}

export default function ObjectOfDesire() {
  const ref = useReveal();
  const { add } = useBag();
  const [colour, setColour] = useState(bag.colours[0]);
  const [size, setSize] = useState(bag.sizes[1]);
  const [qty, setQty] = useState(1);
  const [angle, setAngle] = useState(-20);
  const [openAcc, setOpenAcc] = useState(0);
  const [auto, setAuto] = useState(true);

  // Gentle idle rotation until the visitor interacts.
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setAngle((a) => a + 0.4), 30);
    return () => clearInterval(id);
  }, [auto]);

  const drag = (dx) => {
    setAuto(false);
    setAngle((a) => a + dx * 0.6);
  };
  const goTo = (a) => {
    setAuto(false);
    setAngle(a);
  };

  return (
    <section className="section object reveal" id="new-arrival" ref={ref}>
      <div className="container">
        <SectionLabel no="04" light>
          New Arrival · Interactive 3D
        </SectionLabel>

        <div className="object__grid">
          <div className="object__viewer">
            <h2 className="display display--light">
              The object of <em>desire.</em>
            </h2>
            <p className="object__hint">Drag to turn the piece in your hands.</p>

            <Bag3D colour={colour.hex} angle={angle} onDrag={drag} />

            <div className="object__views">
              <span>3D · 360°</span>
              {bag.views.map((v) => (
                <button key={v.id} onClick={() => goTo(v.angle)}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div className="object__info">
            <p className="object__kicker">{bag.kicker}</p>
            <h3>{bag.name}</h3>
            <p className="object__price">
              {formatPrice(bag.price)} <small>Duties & taxes included</small>
            </p>
            <p className="object__desc">{bag.desc}</p>

            <div className="opt">
              <p className="opt__label">Colour — {colour.name}</p>
              <div className="swatches">
                {bag.colours.map((c) => (
                  <button
                    key={c.name}
                    aria-label={c.name}
                    aria-pressed={colour.name === c.name}
                    className={colour.name === c.name ? "is-active" : ""}
                    style={{ background: c.hex }}
                    onClick={() => setColour(c)}
                  />
                ))}
              </div>
            </div>

            <div className="opt">
              <p className="opt__label">
                Size — {size.label} <small>{size.dims}</small>
              </p>
              <div className="seg">
                {bag.sizes.map((s) => (
                  <button
                    key={s.id}
                    className={size.id === s.id ? "is-active" : ""}
                    onClick={() => setSize(s)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="object__buy">
              <div className="qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">
                  −
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">
                  +
                </button>
              </div>
              <button
                className="btn btn--gold"
                onClick={() =>
                  add(
                    Array.from({ length: qty }, () => ({
                      id: bag.id,
                      name: bag.name,
                      price: bag.price,
                      size: size.label,
                      colour: colour.name,
                    }))
                  )
                }
              >
                Add to bag
              </button>
            </div>

            <ul className="perks">
              {bag.perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className="acc">
              {bag.accordions.map((a, i) => (
                <div key={a.title} className={`acc__item ${openAcc === i ? "is-open" : ""}`}>
                  <button onClick={() => setOpenAcc(openAcc === i ? -1 : i)} aria-expanded={openAcc === i}>
                    {a.title}
                    <span>{openAcc === i ? "−" : "+"}</span>
                  </button>
                  <div className="acc__body">
                    <p>{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
