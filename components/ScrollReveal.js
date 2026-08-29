"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Recreates the prototype's scroll-reveal behaviour:
 * - Elements marked data-reveal="1" fade + rise into place the first time
 *   they scroll into view.
 * - Elements marked data-bridge="1" additionally draw their bridge-arc SVG
 *   path (the child with data-bridge-path) once, the first time it's seen.
 * - Everything is visible by default in CSS, so if JS never runs (or
 *   prefers-reduced-motion is set) the page still reads correctly.
 * Runs once per page since App Router keeps this component mounted across
 * client-side navigations; the pathname dependency re-scans for new
 * elements after every route change.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver !== "function") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const seen = new WeakSet();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          if (el.hasAttribute("data-bridge")) {
            const path = el.querySelector("[data-bridge-path]");
            if (path) {
              path.style.strokeDashoffset = "620";
              path.style.animation =
                "atangDraw 1400ms cubic-bezier(.35,.85,.3,1) 120ms forwards";
            }
            return;
          }
          el.style.animation = "atangRise 700ms ease both";
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    const raf = requestAnimationFrame(() => {
      document.querySelectorAll("[data-reveal], [data-bridge]").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        io.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
