import Image from "next/image";
import { PROFILE } from "@/lib/profile";
import Icon from "./Icons";

/**
 * Full-screen hero: intro + CTAs + socials on the left,
 * portrait with a code card and floating skill badges on the right.
 */
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: copy */}
          <div className="col-lg-6" data-reveal>
            <span className="badge-pill">
              <span className="pulse-dot" aria-hidden="true" />
              {PROFILE.availability}
            </span>

            <h1 className="hero-title">
              Building <span className="text-accent">Digital Experiences</span>{" "}
              That Matter.
            </h1>

            <p className="hero-role">
              {PROFILE.role} — {PROFILE.firstName} {PROFILE.lastName}
            </p>

            <p className="hero-lead">{PROFILE.heroIntro}</p>

            <ul className="hero-tech" aria-label="Core technologies">
              {PROFILE.techChips.map((chip) => (
                <li key={chip} className="tech-chip">
                  {chip}
                </li>
              ))}
            </ul>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#projects" className="btn-x btn-x-primary">
                Explore My Work
                <Icon name="arrowUp" size={17} className="btn-icon-rot" />
              </a>
              <a href="#contact" className="btn-x btn-x-outline">
                Let&apos;s Talk
              </a>
            </div>

            <div className="hero-socials">
              <span className="socials-label">Find me on</span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="social-btn"
                title="GitHub (replace with your profile URL)"
              >
                <Icon name="github" size={19} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="social-btn"
                title="LinkedIn (replace with your profile URL)"
              >
                <Icon name="linkedin" size={19} />
              </a>
              <a
                href={PROFILE.mailto}
                aria-label="Send an email"
                className="social-btn"
                title={PROFILE.email}
              >
                <Icon name="mail" size={19} />
              </a>
            </div>
          </div>

          {/* Right: portrait + code-inspired visuals */}
          <div className="col-lg-6" data-reveal data-reveal-delay="150">
            <div className="hero-visual">
              <div className="hero-glow" aria-hidden="true" />

              <div className="portrait-wrap">
                <Image
                  src={PROFILE.portrait}
                  alt={`Portrait of ${PROFILE.name}, ${PROFILE.role}`}
                  fill
                  priority
                  sizes="(max-width: 992px) 90vw, 560px"
                  className="portrait-img"
                />
                <div className="portrait-frame" aria-hidden="true" />
              </div>

              {/* Floating code card */}
              <div className="code-card float-slow" aria-hidden="true">
                <div className="code-card-head">
                  <span className="dot dot-r" />
                  <span className="dot dot-y" />
                  <span className="dot dot-g" />
                  <span className="code-card-title">developer.js</span>
                </div>
                <pre className="code-card-body">
                  <code>
                    <span className="tok-kw">const</span>{" "}
                    <span className="tok-var">developer</span> = {"{"}
                    {"\n"}  name: <span className="tok-str">&quot;{PROFILE.firstName} {PROFILE.lastName}&quot;</span>,
                    {"\n"}  role: <span className="tok-str">&quot;{PROFILE.role}&quot;</span>,
                    {"\n"}  stack: [<span className="tok-str">&quot;HTML&quot;</span>, <span className="tok-str">&quot;CSS&quot;</span>,{" "}
                    <span className="tok-str">&quot;JS&quot;</span>, <span className="tok-str">&quot;Python&quot;</span>,{" "}
                    <span className="tok-str">&quot;Django&quot;</span>],
                    {"\n"}  passion: <span className="tok-str">&quot;clean code&quot;</span>,
                    {"\n"}{"}"};
                  </code>
                </pre>
              </div>

              {/* Floating skill badges */}
              <span className="float-chip chip-top float-slower">Python</span>
              <span className="float-chip chip-right float-slow">Django</span>
              <span className="float-chip chip-bottom float-slower">Bootstrap 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
