import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

/**
 * Contact form messages.
 * Written by POST /api/contact (Next.js + Drizzle).
 * The Django backend under /backend mirrors this table (contact.ContactMessage).
 */
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 200 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;
