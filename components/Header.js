"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { BridgeWordmark, ShieldMark } from "./icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    mega: {
      columns: [
        {
          heading: "Core services",
          items: [
            { label: "Locate", href: "/services#core-services", body: "Find the people behind incomplete records." },
            { label: "Verify", href: "/services#core-services", body: "Confirm identity and entitlement before anything is reported." },
            { label: "Investigate", href: "/services#core-services", body: "Field work where desktop tracing stops." },
          ],
        },
        {
          heading: "Supporting services",
          items: [
            { label: "Insight", href: "/services#supporting-services", body: "Portfolio-level visibility and reporting." },
            { label: "Connect", href: "/services#supporting-services", body: "Secure, accounted-for case data exchange." },
            { label: "Engagement models", href: "/services#engagement-models", body: "Portfolio, case-based, verification-only or ongoing." },
          ],
        },
      ],
      footer: { label: "See the full services page", href: "/services" },
    },
  },
  { href: "/clients", label: "Clients" },
  { href: "/governance", label: "POPIA" },
  { href: "/contact", label: "Contact" },
];

/** Links behave the same whether or not the browser can run the motion
 * extras below — everything here is progressive enhancement over plain
 * <Link>s, and prefers-reduced-motion turns the imperative bits off. */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState(null);
  const [pillRect, setPillRect] = useState(null);
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Close the mobile drawer / mega menu as soon as the route changes.
  // (Adjusting state during render on a prop change, per
  // https://react.dev/learn/you-might-not-need-an-effect — React re-runs
  // the render immediately with the reset state, without an extra
  // effect-driven commit.)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
    setMegaOpen(false);
  }

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linkRefs = useRef({});
  const megaCloseTimer = useRef(null);

  const activeHref = useMemo(() => {
    const match = [...NAV_LINKS].find((link) =>
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
    );
    return match?.href ?? "/";
  }, [pathname]);

  const pillTarget = hoveredHref ?? activeHref;

  // ---- track reduced-motion preference changes after mount ----
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = (e) => setReduceMotion(e.matches);
    motionQuery.addEventListener?.("change", onMotionChange);
    return () => motionQuery.removeEventListener?.("change", onMotionChange);
  }, []);

  // ---- scroll state (for the glass/condense transition) ----
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- lock page scroll while the mobile drawer is open ----
  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // ---- close the mobile drawer on Escape, return focus to the toggle ----
  const burgerRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // ---- measure the active/hovered link so the floating pill can slide under it ----
  useEffect(() => {
    const measure = () => {
      const nav = navRef.current;
      const el = linkRefs.current[pillTarget];
      if (!nav || !el) {
        setPillRect(null);
        return;
      }
      const navBox = nav.getBoundingClientRect();
      const elBox = el.getBoundingClientRect();
      setPillRect({ left: elBox.left - navBox.left, width: elBox.width });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pillTarget, scrolled]);

  // ---- 3D logo tilt (imperative: skips a re-render on every mouse tick) ----
  function handleLogoMove(e) {
    if (reduceMotion) return;
    const el = logoRef.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const px = (e.clientX - box.left) / box.width;
    const py = (e.clientY - box.top) / box.height;
    const rotateY = (px - 0.5) * 30;
    const rotateX = (0.5 - py) * 16;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(18px) scale(1.04)`;
  }
  function resetLogoTilt() {
    const el = logoRef.current;
    if (el) el.style.transform = "";
  }

  // ---- magnetic nav links: a few px of pull toward the cursor ----
  function handleMagnetic(e, href) {
    if (reduceMotion) return;
    const el = linkRefs.current[href];
    if (!el) return;
    const box = el.getBoundingClientRect();
    const relX = e.clientX - (box.left + box.width / 2);
    const relY = e.clientY - (box.top + box.height / 2);
    el.style.transform = `translate(${relX * 0.18}px, ${relY * 0.3}px)`;
  }
  function resetMagnetic(href) {
    const el = linkRefs.current[href];
    if (el) el.style.transform = "";
  }

  // ---- cursor-reactive glow behind the glass bar ----
  function handleHeaderMove(e) {
    if (reduceMotion) return;
    const el = navRef.current?.closest(".site-nav");
    if (!el) return;
    const box = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - box.left) / box.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - box.top) / box.height) * 100}%`);
  }

  function openMega() {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    setMegaOpen(true);
  }
  function closeMegaSoon() {
    megaCloseTimer.current = setTimeout(() => setMegaOpen(false), 120);
  }

  const servicesLink = NAV_LINKS.find((l) => l.mega);

  return (
    <>
      <header
        className={`site-nav${scrolled ? " is-scrolled" : ""}`}
        onMouseMove={handleHeaderMove}
      >
        <div className="site-nav__inner">
          <Link
            href="/"
            className="nav-logo"
            ref={logoRef}
            onMouseMove={handleLogoMove}
            onMouseLeave={resetLogoTilt}
          >
            <span className="nav-logo__mark">
              <BridgeWordmark size={34} />
            </span>
            <span className="nav-logo__type">
              <span className="nav-logo__name">ATANG</span>
              <span className="nav-logo__sub">TRACING SERVICES</span>
            </span>
          </Link>

          <nav
            className="nav-links"
            ref={navRef}
            onMouseLeave={() => setHoveredHref(null)}
            aria-label="Primary"
          >
            {pillRect ? (
              <span
                className="nav-pill"
                aria-hidden="true"
                style={{
                  transform: `translateX(${pillRect.left}px)`,
                  width: pillRect.width,
                }}
              />
            ) : null}

            {NAV_LINKS.map((link) =>
              link.mega ? (
                <div
                  key={link.href}
                  className="nav-item-mega"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMegaSoon}
                >
                  <Link
                    href={link.href}
                    ref={(el) => {
                      linkRefs.current[link.href] = el;
                    }}
                    className="nav-link"
                    aria-current={activeHref === link.href ? "page" : undefined}
                    aria-expanded={megaOpen}
                    onMouseEnter={() => setHoveredHref(link.href)}
                    onMouseMove={(e) => handleMagnetic(e, link.href)}
                    onMouseLeave={() => resetMagnetic(link.href)}
                    onFocus={() => {
                      setHoveredHref(link.href);
                      openMega();
                    }}
                  >
                    {link.label}
                    <span className="nav-link__caret" aria-hidden="true" />
                  </Link>

                  <div className={`nav-mega${megaOpen ? " is-open" : ""}`}>
                    <div className="nav-mega__inner">
                      {link.mega.columns.map((col) => (
                        <div className="nav-mega__col" key={col.heading}>
                          <div className="nav-mega__heading">{col.heading}</div>
                          {col.items.map((item) => (
                            <Link key={item.label} href={item.href} className="nav-mega__item">
                              <span className="nav-mega__item-label">{item.label}</span>
                              <span className="nav-mega__item-body">{item.body}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <Link href={link.mega.footer.href} className="nav-mega__footer">
                      {link.mega.footer.label} →
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[link.href] = el;
                  }}
                  className="nav-link"
                  aria-current={activeHref === link.href ? "page" : undefined}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  onMouseMove={(e) => handleMagnetic(e, link.href)}
                  onMouseLeave={() => resetMagnetic(link.href)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="nav-right">
            <div className="nav-status" aria-hidden="true">
              <span className="nav-status__dot" />
              <span className="nav-status__text">
                <strong>Verification line open</strong>
                Call-back checks, always on
              </span>
            </div>

            <Link href="/governance?route=member" className="nav-cta">
              <ShieldMark size={16} />
              <span>Verify a Call</span>
              <span className="nav-cta__arrow" aria-hidden="true">→</span>
            </Link>

            <button
              ref={burgerRef}
              type="button"
              className={`nav-burger${menuOpen ? " is-open" : ""}`}
              aria-expanded={menuOpen}
              aria-controls="site-nav-drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-nav-drawer"
        className={`nav-drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="nav-drawer__links" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-drawer__link"
              style={{ transitionDelay: menuOpen ? `${80 + i * 45}ms` : "0ms" }}
              aria-current={activeHref === link.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/governance?route=member"
          className="nav-cta nav-cta--drawer"
          style={{ transitionDelay: menuOpen ? `${80 + NAV_LINKS.length * 45}ms` : "0ms" }}
          onClick={() => setMenuOpen(false)}
        >
          <ShieldMark size={18} />
          <span>Verify a Call</span>
          <span className="nav-cta__arrow" aria-hidden="true">→</span>
        </Link>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="nav-scrim"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          tabIndex={-1}
        />
      ) : null}
    </>
  );
}
