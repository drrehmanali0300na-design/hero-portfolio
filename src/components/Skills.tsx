import type { CSSProperties } from "react";
import { SKILL_GROUPS } from "@/lib/profile";
import Icon from "./Icons";

/**
 * Skill tiles: small rounded brand-style monogram tiles.
 * Levels are intentionally honest (not maxed out).
 */
const TILES: Record<string, { label: string; bg: string; fg: string }> = {
  html5: { label: "5", bg: "#E44D26", fg: "#fff" },
  css3: { label: "3", bg: "#1572B6", fg: "#fff" },
  bootstrap: { label: "B", bg: "#7952B3", fg: "#fff" },
  javascript: { label: "JS", bg: "#F7DF1E", fg: "#111" },
  python: { label: "Py", bg: "#3776AB", fg: "#FFD43B" },
  django: { label: "dj", bg: "#0C3C26", fg: "#44B78B" },
  responsive: { label: "R", bg: "rgba(22,119,255,.16)", fg: "#389BFF" },
  git: { label: "G", bg: "rgba(240,81,56,.16)", fg: "#F05138" },
  seo: { label: "S", bg: "rgba(52,199,123,.16)", fg: "#34C77B" },
  api: { label: "{} ", bg: "rgba(148,163,184,.16)", fg: "#CBD5E1" },
};

const TILE_ICON: Record<string, "smartphone" | "git" | "search" | "database"> = {
  responsive: "smartphone",
  git: "git",
  seo: "search",
  api: "database",
};

function SkillTile({ tile }: { tile: string }) {
  const conf = TILES[tile] ?? { label: tile.slice(0, 2), bg: "#1677FF", fg: "#fff" };
  const strokeIcon = TILE_ICON[tile];
  return (
    <span
      className="skill-tile"
      style={{ backgroundColor: conf.bg, color: conf.fg }}
      aria-hidden="true"
    >
      {strokeIcon ? (
        <Icon name={strokeIcon} size={16} strokeWidth={2.2} />
      ) : (
        <span className="skill-tile-label">{conf.label}</span>
      )}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">02 · Technical Skills</p>
          <h2 className="section-title">
            My <span className="text-accent">Tech Stack</span> & Proficiency
          </h2>
          <p className="section-text section-head-text">
            A realistic snapshot of where I stand today — solid fundamentals on the
            frontend, a dependable Python/Django backend, and the workflow tools that
            keep projects shipping.
          </p>
        </div>

        <div className="row g-4">
          {SKILL_GROUPS.map((group, gi) => (
            <div
              className="col-md-6 col-lg-4"
              key={group.title}
              data-reveal
              data-reveal-delay={String(gi * 120)}
            >
              <div className="skill-group h-100">
                <h3 className="skill-group-title">{group.title}</h3>
                <p className="skill-group-blurb">{group.blurb}</p>
                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li className="skill-row" key={skill.name}>
                      <div className="skill-row-top">
                        <span className="skill-name">
                          <SkillTile tile={skill.tile} />
                          {skill.name}
                        </span>
                        <span className="skill-pct">{skill.level}%</span>
                      </div>
                      <div
                        className="skill-track"
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span
                          className="skill-fill"
                          style={{ "--skill-w": `${skill.level}%` } as CSSProperties}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
