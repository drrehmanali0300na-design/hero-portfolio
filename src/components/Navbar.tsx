"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "@/lib/profile";
import Icon from "./Icons";

/**
 * Sticky responsive navbar.
 * - Solid background + border once the page is scrolled.
 * - Active section highlighting via IntersectionObserver.
 * - Mobile hamburger menu (custom toggle, no extra JS library).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-navbar${scrolled ? " scrolled" : ""}`}>
      <nav
        className="container d-flex align-items-center justify-content-between"
        aria-label="Main navigation"
      >
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <Icon name="code" size={16} strokeWidth={2.5} />
          </span>
          <span className="brand-name">
            {PROFILE.firstName}
            <span className="brand-accent">{PROFILE.lastName}</span>
          </span>
        </a>

        <button
          type="button"
          className="nav-toggle d-lg-none"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobileMenu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>

        <div
          id="mobileMenu"
          className={`nav-menu${open ? " open" : ""}`}
        >
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-linkx${active === link.id ? " active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-x btn-x-primary btn-x-sm nav-cta"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
