from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.homepage),
    path('search/', views.searchpage),
    path('products/', views.ProductAPIView.as_view()),
]

