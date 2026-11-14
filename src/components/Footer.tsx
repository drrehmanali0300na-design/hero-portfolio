"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE, SERVICES } from "@/lib/profile";
import Icon from "./Icons";

/**
 * Large premium footer: brand + intro, navigation, services, contact/socials,
 * dynamic copyright year (JavaScript), tagline and back-to-top button.
 */
export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Copyright year generated dynamically on the client.
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5 footer-main">
          {/* Brand */}
          <div className="col-lg-4">
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark" aria-hidden="true">
                <Icon name="code" size={16} strokeWidth={2.5} />
              </span>
              <span className="brand-name">
                {PROFILE.firstName}
                <span className="brand-accent">{PROFILE.lastName}</span>
              </span>
            </a>
            <p className="footer-intro">
              {PROFILE.role} building fast, responsive and reliable web experiences with
              HTML5, CSS3, Bootstrap 5, JavaScript, Python and Django.
            </p>
            <div className="footer-socials">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-btn"
              >
                <Icon name="github" size={18} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-btn"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a href={PROFILE.mailto} aria-label="Email" className="social-btn">
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-4 col-lg-3">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3">
            <h3 className="footer-heading">Get In Touch</h3>
            <ul className="footer-links footer-contact">
              <li>
                <Icon name="mail" size={15} />
                <a href={PROFILE.mailto}>{PROFILE.email}</a>
              </li>
              <li>
                <Icon name="github" size={15} />
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub — drrehmanali0300na-design
                </a>
              </li>
              <li>
                <Icon name="linkedin" size={15} />
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn — Abdul Rehman
                </a>
              </li>
              <li>
                <Icon name="mapPin" size={15} />
                <span>{PROFILE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year ?? ""} {PROFILE.name}. All rights reserved.
          </p>
          <p className="footer-tagline">
            Designed &amp; Developed with <span className="heart">♥</span> Passion
          </p>
          <button
            type="button"
            className="footer-top-btn"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Icon name="arrowUp" size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
