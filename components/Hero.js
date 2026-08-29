/**
 * Full-bleed photo hero with a dark gradient overlay, used on About,
 * Services is a flat-colour variant (no image) — see FlatHero below.
 */
export function PhotoHero({
  image,
  alt,
  objectPosition = "50% 50%",
  minHeight = 360,
  overlay = "linear-gradient(180deg, rgba(14,74,68,0.70), rgba(14,74,68,0.95))",
  eyebrow,
  title,
  subtitle,
  padding = "56px 5% 48px",
}) {
  return (
    <section className="hero-media" style={{ minHeight }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} style={{ objectPosition }} />
      <div className="hero-overlay" style={{ background: overlay }} />
      <div className="hero-content" style={{ padding }}>
        {eyebrow ? (
          <div className="eyebrow eyebrow--dark" data-reveal="1" style={{ animationDelay: "120ms" }}>
            {eyebrow}
          </div>
        ) : null}
        <h1 className="h1" style={{ color: "var(--cream)", maxWidth: 880 }} data-reveal="1">
          {title}
        </h1>
        {subtitle ? (
          <p className="lead text-on-dark" style={{ maxWidth: 800 }} data-reveal="1">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

/** Flat dark-teal hero (no photo) — used on Services. */
export function FlatHero({ eyebrow, title, subtitle }) {
  return (
    <section className="section--teal" style={{ padding: "56px 5% 48px", boxSizing: "border-box" }}>
      <div className="stack" style={{ "--gap": "16px" }}>
        <div className="eyebrow eyebrow--dark">{eyebrow}</div>
        <h1 className="h1" style={{ color: "var(--cream)", maxWidth: 880 }}>
          {title}
        </h1>
        <p className="lead text-on-dark" style={{ maxWidth: 800 }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
