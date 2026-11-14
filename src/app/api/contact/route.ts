import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";

/**
 * POST /api/contact
 * Real backend endpoint: validates the payload and stores the message in
 * PostgreSQL via Drizzle. The Django equivalent lives in backend/contact.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Payload = Record<string, unknown>;

const clean = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body. Expected JSON." },
      { status: 400 },
    );
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 120) {
    errors.name = "Please enter your name (2–120 characters).";
  }
  if (email.length === 0 || email.length > 255 || !EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (subject.length < 3 || subject.length > 200) {
    errors.subject = "Subject must be between 3 and 200 characters.";
  }
  if (message.length < 10 || message.length > 5000) {
    errors.message = "Message must be between 10 and 5000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please fix the highlighted fields.", errors },
      { status: 422 },
    );
  }

  try {
    await db.insert(contactMessages).values({ name, email, subject, message });
  } catch (error) {
    console.error("Failed to store contact message:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong on the server. Please try again later.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { ok: true, message: "Thank you! Your message has been received and stored." },
    { status: 201 },
  );
}
