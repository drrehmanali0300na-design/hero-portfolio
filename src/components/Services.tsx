import { SERVICES } from "@/lib/profile";
import Icon from "./Icons";
import type { ComponentProps } from "react";

type IconName = ComponentProps<typeof Icon>["name"];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">04 · Services</p>
          <h2 className="section-title">
            What I <span className="text-accent">Can Do For You</span>
          </h2>
          <p className="section-text section-head-text">
            From a single landing page to a full web application — every service is
            delivered with clean code, responsive design and clear communication.
          </p>
        </div>

        <div className="row g-4">
          {SERVICES.map((service, i) => (
            <div
              className="col-md-6 col-lg-4"
              key={service.title}
              data-reveal
              data-reveal-delay={String((i % 3) * 110)}
            >
              <div className="service-card h-100">
                <span className="service-icon">
                  <Icon name={service.icon as IconName} size={22} strokeWidth={1.8} />
                </span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
