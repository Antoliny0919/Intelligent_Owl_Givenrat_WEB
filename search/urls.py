from argparse import Namespace
from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)

urlpatterns = [
    path('', views.homepage),
    path('search/', views.searchpage),
    path('', include(router.urls)),

]

