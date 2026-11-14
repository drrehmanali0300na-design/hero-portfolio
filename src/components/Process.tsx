import { PROCESS } from "@/lib/profile";
import Icon from "./Icons";
import type { ComponentProps } from "react";

type IconName = ComponentProps<typeof Icon>["name"];

export default function Process() {
  return (
    <section id="process" className="section section-alt">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">05 · Development Process</p>
          <h2 className="section-title">
            From Idea To <span className="text-accent">Launch</span>
          </h2>
          <p className="section-text section-head-text">
            A simple, transparent four-step workflow that keeps projects predictable
            and quality high.
          </p>
        </div>

        <ol className="row g-4 process-row">
          {PROCESS.map((item, i) => (
            <li
              className="col-sm-6 col-lg-3 process-step"
              key={item.step}
              data-reveal
              data-reveal-delay={String(i * 110)}
            >
              <div className="process-card h-100">
                <span className="process-num">{item.step}</span>
                <span className="process-icon">
                  <Icon name={item.icon as IconName} size={20} strokeWidth={1.8} />
                </span>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
