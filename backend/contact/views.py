import json
import re

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from .forms import ContactForm
from .models import ContactMessage

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]{2,}$")


def _validate(data):
    """Shared validation for the JSON API. Returns (cleaned, errors)."""
    def clean(key):
        value = data.get(key)
        return value.strip() if isinstance(value, str) else ""

    cleaned = {
        "name": clean("name"),
        "email": clean("email"),
        "subject": clean("subject"),
        "message": clean("message"),
    }
    errors = {}
    if not 2 <= len(cleaned["name"]) <= 120:
        errors["name"] = "Please enter your name (2–120 characters)."
    if not cleaned["email"] or len(cleaned["email"]) > 255 or not EMAIL_RE.match(cleaned["email"]):
        errors["email"] = "Please enter a valid email address."
    if not 3 <= len(cleaned["subject"]) <= 200:
        errors["subject"] = "Subject must be between 3 and 200 characters."
    if not 10 <= len(cleaned["message"]) <= 5000:
        errors["message"] = "Message must be between 10 and 5000 characters."
    return cleaned, errors


def index(request):
    """Simple dark-themed contact page that posts to /api/contact/ via fetch."""
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = ContactForm()
    return render(request, "contact/index.html", {"form": form})


@require_http_methods(["POST"])
def contact_api(request):
    """
    JSON endpoint mirroring the Next.js route POST /api/contact.
    Accepts JSON or form-encoded bodies and stores the message.
    """
    if request.content_type == "application/json":
        try:
            data = json.loads(request.body.decode("utf-8") or "{}")
        except (json.JSONDecodeError, UnicodeDecodeError):
            return JsonResponse(
                {"ok": False, "message": "Invalid request body. Expected JSON."},
                status=400,
            )
        if not isinstance(data, dict):
            return JsonResponse(
                {"ok": False, "message": "Invalid request body. Expected a JSON object."},
                status=400,
            )
    else:
        data = request.POST

    cleaned, errors = _validate(data)
    if errors:
        return JsonResponse(
            {"ok": False, "message": "Please fix the highlighted fields.", "errors": errors},
            status=422,
        )

    ContactMessage.objects.create(**cleaned)
    return JsonResponse(
        {"ok": True, "message": "Thank you! Your message has been received and stored."},
        status=201,
    )
