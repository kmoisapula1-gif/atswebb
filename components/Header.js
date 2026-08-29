import Link from "next/link";
import { BridgeWordmark } from "./icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/governance", label: "POPIA" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "var(--teal)",
        boxSizing: "border-box",
        padding: "18px 5%",
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexWrap: "wrap",
      }}
    >
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 12, flex: "none", textDecoration: "none" }}
      >
        <BridgeWordmark size={38} />
        <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "0.03em", lineHeight: 1, color: "var(--cream)" }}>
            ATANG
          </span>
          <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.24em", color: "var(--body-light-1)" }}>
            TRACING SERVICES
          </span>
        </span>
      </Link>

      {/*
        Layout constraint (kept intentionally): the "Email us" CTA lives
        INSIDE this <nav>, not as a separate flex child of the header. If it
        were a sibling of <nav>, it becomes the item that wraps to its own
        row at ~840-900px viewport widths, leaving empty teal space above it.
        As built here, the nav's own buttons wrap first and the CTA stays
        anchored at the end of the row/group.
      */}
      <nav
        style={{
          flex: "1 1 auto",
          minWidth: 0,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {link.label}
          </Link>
        ))}
        <Link href="/governance?route=member" className="nav-verify">
          VERIFY A CALL
        </Link>
        <a href="mailto:info@atangts.co.za" className="nav-cta">
          Email us
        </a>
      </nav>
    </header>
  );
}
