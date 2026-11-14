from django.urls import path

from . import views

app_name = "contact"

urlpatterns = [
    path("", views.index, name="index"),
    path("api/contact/", views.contact_api, name="api"),
]
