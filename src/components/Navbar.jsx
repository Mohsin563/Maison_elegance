import { useEffect, useState } from "react";
import { navLinks } from "../data/content";
import { useBag } from "../context/BagContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { count, setOpen } = useBag();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          Maison Élégance
        </a>

        <nav className={`nav__links ${menu ? "is-open" : ""}`} aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenu(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__bag" onClick={() => setOpen(true)} aria-label="Open bag">
            Bag <span>({count})</span>
          </button>
          <button
            className="nav__burger"
            onClick={() => setMenu((m) => !m)}
            aria-label="Toggle menu"
            aria-expanded={menu}
          >
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}
