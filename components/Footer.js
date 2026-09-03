import Link from "next/link";
import { BridgeWordmark, ShieldMark } from "./icons";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--teal-deep)",
        boxSizing: "border-box",
        padding: "48px 5% 32px",
        display: "flex",
        flexDirection: "column",
        gap: 28,
      }}
    >
      <div className="grid-autofit" style={{ "--min": "220px", "--gap": "28px" }}>
        <div className="stack" style={{ "--gap": "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <BridgeWordmark size={34} />
            <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "0.03em", color: "var(--cream)", lineHeight: 1 }}>
                ATANG
              </span>
              <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.24em", color: "var(--body-light-3)" }}>
                TRACING SERVICES
              </span>
            </span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: "var(--body-light-2)" }}>
            Atang Tracing Services (Pty) Ltd
            <br />
            Pretoria, South Africa
          </div>
        </div>

        <div className="stack" style={{ "--gap": "10px" }}>
          <div className="eyebrow eyebrow--dark" style={{ fontSize: 12, letterSpacing: "0.2em" }}>
            PAGES
          </div>
          <div className="stack" style={{ "--gap": "8px", alignItems: "flex-start" }}>
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/about" className="footer-link">About us</Link>
            <Link href="/services" className="footer-link">Services</Link>
            <Link href="/clients" className="footer-link">Clients</Link>
            <Link href="/governance" className="footer-link">POPIA &amp; governance</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </div>
        </div>

        <div className="stack" style={{ "--gap": "10px" }}>
          <div className="eyebrow eyebrow--dark" style={{ fontSize: 12, letterSpacing: "0.2em" }}>
            CONTACT
          </div>
          <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: "var(--body-light-1)" }}>
            <a href="mailto:info@atangts.co.za" style={{ color: "var(--body-light-1)" }}>
              info@atangts.co.za
            </a>
            <br />
            <a href="tel:+27718230454" style={{ color: "var(--body-light-1)" }}>
              071 823 0454
            </a>
          </div>
        </div>

        <div className="stack" style={{ "--gap": "10px" }}>
          <div className="eyebrow eyebrow--dark" style={{ fontSize: 12, letterSpacing: "0.2em" }}>
            WHO WE WORK FOR
          </div>
          <div style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: "var(--body-light-2)" }}>
            Atang provides tracing and verification services to retirement funds, administrators and insurers.
            Individual benefit enquiries should be directed to the relevant fund or administrator.
          </div>
        </div>
      </div>

      <div
        style={{
          background: "var(--teal)",
          border: "1px solid var(--teal-mid)",
          borderRadius: "var(--radius-md)",
          padding: "22px 26px",
          display: "flex",
          gap: 18,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <ShieldMark size={34} />
        <div style={{ flex: 1, minWidth: 220, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: "var(--cream)" }}>
            Atang never asks for a payment, PIN or OTP.
          </div>
          <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.55, color: "var(--body-light-1)" }}>
            There is no fee to release a benefit that belongs to you. If you are unsure whether a request is
            really from us, call{" "}
            <a href="tel:+27718230454" style={{ color: "var(--peach)", fontWeight: 600 }}>
              071 823 0454
            </a>{" "}
            or email{" "}
            <a href="mailto:info@atangts.co.za" style={{ color: "var(--peach)", fontWeight: 600 }}>
              info@atangts.co.za
            </a>
            .
          </div>
        </div>
      </div>

      {/*
        Constraint (kept intentionally): this is a two-group CSS grid
        (1fr auto), not a three-item space-between flex row. A flex row
        with the copyright as its own item orphans it onto its own line at
        around 811px of content width; grouping it with the tagline avoids
        that.
      */}
      <div
        style={{
          paddingTop: 22,
          borderTop: "1px solid var(--teal-hairline)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "14px 28px",
          alignItems: "center",
          fontSize: 13,
          color: "var(--body-light-4)",
          letterSpacing: "0.14em",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span>TRACING · VERIFYING · RECONNECTING</span>
          <span>© 2026 ATANG TRACING SERVICES</span>
        </div>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <a
            href="/documents/atang-paia-manual.pdf"
            download
            style={{ color: "var(--body-light-4)", letterSpacing: "0.14em", whiteSpace: "nowrap" }}
          >
            PAIA MANUAL
          </a>
          <a
            href="/documents/atang-privacy-notice.pdf"
            download
            style={{ color: "var(--body-light-4)", letterSpacing: "0.14em", whiteSpace: "nowrap" }}
          >
            PRIVACY NOTICE
          </a>
        </div>
      </div>
    </footer>
  );
}
