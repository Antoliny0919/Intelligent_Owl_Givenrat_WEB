from django.shortcuts import render

from rest_framework import status, viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from django_filters.rest_framework import DjangoFilterBackend

from .models import Product
from .serializers import ProductSimpleSerializer


# Create your views here.

def homepage(request):
  return render(request, 'search/homepage_main/build/homepage.html')

def searchpage(request):
  return render(request, 'search/search_page/build/search_page.html')

class ProductViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSimpleSerializer
  filter_backends = [DjangoFilterBackend]
  filterset_fields = ['price', 'name', 'attribute',]
  

