import django_filters
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets, status
from django_filters.rest_framework import DjangoFilterBackend

from .models import Product
from .serializers import ProductSimpleSerializer


# Create your views here.

def homepage(request):
  return render(request, 'search/homepage_main/build/homepage.html')


def searchpage(request):
  return render(request, 'search/search_page/build/search_page.html')


class ProductFilter(django_filters.FilterSet):
  exact_price = django_filters.NumberFilter(field_name="price", lookup_expr="exact")
  contains_name = django_filters.CharFilter(field_name="name", lookup_expr="contains")
  contains_first_attribute = django_filters.CharFilter(field_name="attribute", lookup_expr="contains")
  contains_second_attribute = django_filters.CharFilter(field_name="attribute", lookup_expr="contains")

  class Meta:
    model = Product
    exclude = ['price', 'name', 'attribute']
    fields = ['price', 'name', 'attribute', 'attribute']


class ProductViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSimpleSerializer
  filter_backends = (DjangoFilterBackend,)
  filterset_class = ProductFilter




