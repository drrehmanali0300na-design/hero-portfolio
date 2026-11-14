"""Root URL configuration: admin + the contact app (HTML page + JSON API)."""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("contact.urls")),
]
