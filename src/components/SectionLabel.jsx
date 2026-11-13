export default function SectionLabel({ no, children, light = false }) {
  return (
    <p className={`section-label ${light ? "section-label--light" : ""}`}>
      {no && <span>( {no} ) — </span>}
      {children}
    </p>
  );
}
