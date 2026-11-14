"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROFILE, STATS } from "@/lib/profile";
import Icon from "./Icons";

const APPROACH = [
  "Clean, commented, reusable code",
  "Mobile-first, responsive layouts",
  "Performance & accessibility focused",
  "SEO-friendly HTML structure",
];

/** Animated counter that runs once when the stats row scrolls into view. */
function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Image side */}
          <div className="col-lg-5" data-reveal>
            <div className="about-visual">
              <div className="about-img-wrap">
                <Image
                  src={PROFILE.aboutImage}
                  alt={`${PROFILE.firstName} working on code in a dark studio`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 992px) 90vw, 460px"
                  className="about-img"
                />
              </div>
              <div className="about-exp-card">
                <span className="about-exp-value">3+</span>
                <span className="about-exp-label">Years of hands-on experience</span>
              </div>
            </div>
          </div>

          {/* Copy side */}
          <div className="col-lg-7" data-reveal data-reveal-delay="120">
            <p className="eyebrow">01 · About Me</p>
            <h2 className="section-title">
              Passionate About Crafting <span className="text-accent">Web Solutions</span>
            </h2>

            <p className="section-text">
              I&apos;m a full-stack web developer passionate about building clean,
              responsive websites and dependable web applications. I enjoy every
              layer of the stack — from a pixel-perfect{" "}
              <strong>frontend in HTML5, CSS3 and Bootstrap 5</strong> to a
              well-structured <strong>Python and Django backend</strong> and modern
              digital solutions end to end.
            </p>
            <p className="section-text">
              My development approach is simple: understand the goal first, then build
              with semantic, accessible markup, maintainable code and performance in
              mind. I believe great digital products are fast, responsive on any device
              and easy to maintain.
            </p>
            <p className="section-text">
              My career goal is to keep growing as a developer — shipping modern digital
              solutions for businesses and startups, contributing to meaningful projects,
              and writing code I&apos;m proud of.
            </p>

            <ul className="approach-list">
              {APPROACH.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} className="check-ic" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="row g-3 stats-row">
              {STATS.map((stat, i) => (
                <div className="col-6 col-md-3" key={stat.label} data-reveal data-reveal-delay={String(i * 90)}>
                  <div className="stat-card">
                    <span className="stat-value">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
