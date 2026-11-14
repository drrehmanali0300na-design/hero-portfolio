"use client";

import { useEffect } from "react";

/**
 * Global, lightweight reveal-on-scroll engine.
 * Any element with a `data-reveal` attribute fades/slides in once when it
 * enters the viewport. A `data-reveal-delay` attribute (ms) staggers items.
 */
export default function RevealFX() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    for (const el of elements) {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.transitionDelay = `${delay}ms`;
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
