import re

from django import forms

from .models import ContactMessage

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]{2,}$")


class ContactForm(forms.ModelForm):
    """Contact form with the same validation rules as the Next.js API."""

    class Meta:
        model = ContactMessage
        fields = ["name", "email", "subject", "message"]
        widgets = {
            "name": forms.TextInput(attrs={"placeholder": "Your full name", "maxlength": 120}),
            "email": forms.EmailInput(attrs={"placeholder": "you@example.com", "maxlength": 255}),
            "subject": forms.TextInput(attrs={"placeholder": "What is this about?", "maxlength": 200}),
            "message": forms.Textarea(attrs={"placeholder": "Tell me about your project…", "rows": 6, "maxlength": 5000}),
        }

    def clean_name(self):
        name = (self.cleaned_data.get("name") or "").strip()
        if not 2 <= len(name) <= 120:
            raise forms.ValidationError("Please enter your name (2–120 characters).")
        return name

    def clean_email(self):
        email = (self.cleaned_data.get("email") or "").strip()
        if not email or len(email) > 255 or not EMAIL_RE.match(email):
            raise forms.ValidationError("Please enter a valid email address.")
        return email

    def clean_subject(self):
        subject = (self.cleaned_data.get("subject") or "").strip()
        if not 3 <= len(subject) <= 200:
            raise forms.ValidationError("Subject must be between 3 and 200 characters.")
        return subject

    def clean_message(self):
        message = (self.cleaned_data.get("message") or "").strip()
        if not 10 <= len(message) <= 5000:
            raise forms.ValidationError("Message must be between 10 and 5000 characters.")
        return message
