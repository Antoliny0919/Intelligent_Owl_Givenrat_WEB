from django.urls import path
from . import views



urlpatterns = [
    path('', views.homepage),
    path('search/', views.searchpage),
    path('products/', views.ProductList.as_view()),
]

