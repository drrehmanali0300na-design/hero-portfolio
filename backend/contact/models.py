from django.db import models


class ContactMessage(models.Model):
    """
    A message submitted through the portfolio contact form.
    Mirrors the `contact_messages` table used by the Next.js/Drizzle backend
    (see src/db/schema.ts).
    """

    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=255)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "contact message"
        verbose_name_plural = "contact messages"

    def __str__(self):
        return f"{self.name} <{self.email}> — {self.subject[:40]}"
