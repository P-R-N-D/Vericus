"""URL configuration for the initial Vericus Django scaffold."""

from django.contrib import admin
from django.urls import path
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def health(_request):
    return Response(
        {
            "status": "ok",
            "service": "vericus-backend",
            "backend": "django",
            "api": "drf",
        }
    )


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health, name="health"),
    path("api/health", health, name="health-no-slash"),
]
