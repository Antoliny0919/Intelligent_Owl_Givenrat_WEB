from django.urls import path, include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)

urlpatterns = [
    path('', views.homepage),
    path('search/', views.searchpage),
    # path('products/', views.ProductsAPIView.as_view()),
    path('', include(router.urls)),
]

