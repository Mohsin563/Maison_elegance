// Image slot. Renders the photo when `src` is provided, otherwise a tonal
// gradient so the layout holds its shape until real photography is added.
export default function Placeholder({ src, alt = "", tone = "bone", label, className = "" }) {
  if (src) {
    return <img className={`ph ph--img ${className}`} src={src} alt={alt} loading="lazy" />;
  }
  return (
    <div className={`ph ph--${tone} ${className}`} role="img" aria-label={alt || label || "Image"}>
      {label && <span className="ph__label">{label}</span>}
    </div>
  );
}
