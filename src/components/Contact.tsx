"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { PROFILE } from "@/lib/profile";
import Icon from "./Icons";

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

/**
 * Contact form — connected to a REAL backend.
 * Submits to POST /api/contact (Next.js route → PostgreSQL via Drizzle).
 * The Django equivalent endpoint lives in backend/contact (see README).
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (form.name.trim().length < 2 || form.name.trim().length > 120)
      e.name = "Please enter your name (2–120 characters).";
    if (!EMAIL_RE.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (form.subject.trim().length < 3 || form.subject.trim().length > 200)
      e.subject = "Subject must be 3–200 characters.";
    if (form.message.trim().length < 10 || form.message.trim().length > 5000)
      e.message = "Message must be 10–5000 characters.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setStatus("idle");
    setStatusMsg("");
    const fieldErrors = validate();
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setStatus("error");
      setStatusMsg("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok: boolean; message: string; errors?: FieldErrors };
      if (res.ok && data.ok) {
        setStatus("success");
        setStatusMsg(data.message);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMsg(data.message || "Something went wrong. Please try again.");
        if (data.errors) setErrors(data.errors);
      }
    } catch {
      setStatus("error");
      setStatusMsg("Network error — please check your connection and try again.");
    }
  }

  const inputCls = (field: keyof FieldErrors) =>
    `form-control-x${errors[field] ? " invalid" : ""}`;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row g-5">
          {/* Info side */}
          <div className="col-lg-5" data-reveal>
            <p className="eyebrow">06 · Contact</p>
            <h2 className="section-title">
              Let&apos;s Build Something <span className="text-accent">Great Together</span>
            </h2>
            <p className="section-text">
              Have a project in mind, a question about my work, or just want to say
              hello? Send a message — I usually reply within 24 hours.
            </p>

            <ul className="contact-methods">
              <li>
                <a href={PROFILE.mailto} className="contact-method">
                  <span className="contact-method-icon">
                    <Icon name="mail" size={19} />
                  </span>
                  <span>
                    <span className="contact-method-label">Email me at</span>
                    <span className="contact-method-value">{PROFILE.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                  title="GitHub (replace with your profile URL)"
                >
                  <span className="contact-method-icon">
                    <Icon name="github" size={19} />
                  </span>
                  <span>
                    <span className="contact-method-label">GitHub</span>
                    <span className="contact-method-value">github.com/drrehmanali0300na-design</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                  title="LinkedIn (replace with your profile URL)"
                >
                  <span className="contact-method-icon">
                    <Icon name="linkedin" size={19} />
                  </span>
                  <span>
                    <span className="contact-method-label">LinkedIn</span>
                    <span className="contact-method-value">linkedin.com/in/abdul-rehman-69ba98416</span>
                  </span>
                </a>
              </li>
            </ul>

            <p className="backend-note">
              <Icon name="checkCircle" size={16} />
              This form is connected to a live backend (PostgreSQL via the
              <code> /api/contact </code> endpoint) — your message is really stored,
              not faked. A Django version of the same endpoint ships in{" "}
              <code>backend/</code>.
            </p>
          </div>

          {/* Form side */}
          <div className="col-lg-7" data-reveal data-reveal-delay="120">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="cf-name" className="form-label-x">
                    Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    className={inputCls("name")}
                    placeholder="Your full name"
                    value={form.name}
                    maxLength={120}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="cf-email" className="form-label-x">
                    Email
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    className={inputCls("email")}
                    placeholder="you@example.com"
                    value={form.email}
                    maxLength={255}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="col-12">
                  <label htmlFor="cf-subject" className="form-label-x">
                    Subject
                  </label>
                  <input
                    id="cf-subject"
                    type="text"
                    className={inputCls("subject")}
                    placeholder="What is this about?"
                    value={form.subject}
                    maxLength={200}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                  {errors.subject && <span className="field-error">{errors.subject}</span>}
                </div>
                <div className="col-12">
                  <label htmlFor="cf-message" className="form-label-x">
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    className={inputCls("message")}
                    rows={6}
                    placeholder="Tell me about your project, timeline and goals…"
                    value={form.message}
                    maxLength={5000}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                <button
                  type="submit"
                  className="btn-x btn-x-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className="spinner" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      <Icon name="send" size={16} /> Send Message
                    </>
                  )}
                </button>
                {statusMsg && (
                  <p
                    className={`form-status ${status}`}
                    role={status === "error" ? "alert" : "status"}
                  >
                    {status === "success" && <Icon name="checkCircle" size={16} />}
                    {statusMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
