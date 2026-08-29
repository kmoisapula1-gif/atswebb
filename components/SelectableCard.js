/**
 * A single-select "which are you" card — used on Clients (sector), Governance
 * (route) and Contact (topic). Real <button> with aria-pressed for keyboard
 * and screen-reader operability, matching the site-wide selector pattern.
 */
export default function SelectableCard({ selected, onClick, icon, title, description, cue, reveal = true }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      data-selected={selected ? "true" : "false"}
      data-reveal={reveal ? "1" : undefined}
      className="card--selectable"
    >
      {icon}
      <div className="h3" style={{ color: "var(--teal)" }}>
        {title}
      </div>
      <p className="body-text body-text--sm text-on-light-muted" style={{ margin: 0 }}>
        {description}
      </p>
      {cue ? <div className="card--selectable-cue">{cue}</div> : null}
    </button>
  );
}
