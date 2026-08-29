/**
 * "Rule wipe" card: a coloured accent rule across the top that widens to
 * full-width on hover (the site's signature hover interaction). `variant`
 * picks the background: "cream" (default), "dark" (teal card on dark
 * sections), "sand" (cream card on sand sections).
 */
export default function RuleCard({ title, body, rule = "var(--terracotta)", variant = "cream", reveal = true, titleColor, bodyColor, children }) {
  const bgClass =
    variant === "dark" ? "card--rule-dark" : variant === "sand" ? "card--rule-sand" : "";
  return (
    <div
      className={`card card--rule ${bgClass}`.trim()}
      style={{ "--rule": rule }}
      data-reveal={reveal ? "1" : undefined}
    >
      <div
        style={{
          fontSize: 19,
          fontWeight: variant === "dark" ? 800 : 900,
          color: titleColor || (variant === "dark" ? "var(--cream)" : "var(--teal)"),
          lineHeight: 1.25,
        }}
      >
        {title}
      </div>
      {body ? (
        <p
          style={{
            margin: "8px 0 0",
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.5,
            color: bodyColor || (variant === "dark" ? "var(--body-light-2)" : "var(--body-dark-2)"),
          }}
        >
          {body}
        </p>
      ) : null}
      {children}
    </div>
  );
}
