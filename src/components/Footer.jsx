import { footer } from "../data/content";

export default function Footer() {
  const { contact } = footer;
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h4>Maison Élégance</h4>
            <p>{footer.blurb}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5>Contact</h5>
            <ul>
              <li>{contact.phone}</li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>{contact.address}</li>
              <li>{contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <span>© 2025 Maison Élégance. All rights reserved.</span>
          <span>France / € EUR</span>
          <a href="#top">Back to top ↑</a>
        </div>

        <div className="footer__mark" aria-hidden="true">
          Maison Élégance
        </div>
      </div>
    </footer>
  );
}
