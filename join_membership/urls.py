from django.urls import path
from . import views



urlpatterns = [
    path('join_membership/', views.join_membership_page, name="join_membership"),
    path('register/', views.RegisterView.as_view()),
]

