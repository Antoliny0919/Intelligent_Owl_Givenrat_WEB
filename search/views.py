from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import Product
from .serializers import ProductSerializer
from .pagination import LargeResultsSetPagination

# Create your views here.

def homepage(request):
  return render(request, 'search/homepage_main/build/homepage.html')


def searchpage(request):
  return render(request, 'search/search_page/build/search_page.html')


class ProductAPIView(APIView, LargeResultsSetPagination):
  
  def get(self, request):
        products = Product.objects.all()
        result_page = self.paginate_queryset(products, request)
        if result_page is not None:
            serializer = ProductSerializer(result_page, many=True, context={'request':request})
            return self.get_paginated_response(serializer.data)
        
        response = Response(serializer.data, status=status.HTTP_200_OK)
        return response
  
  
  def post(self, request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    




# class ProductFilter(django_filters.FilterSet):
#   exact_price = django_filters.NumberFilter(field_name="price", lookup_expr="exact")
#   contains_name = django_filters.CharFilter(field_name="name", lookup_expr="contains")
#   contains_first_attribute = django_filters.CharFilter(field_name="attribute", lookup_expr="contains")
#   contains_second_attribute = django_filters.CharFilter(field_name="attribute", lookup_expr="contains")

#   class Meta:
#     model = Product
#     exclude = ['price', 'name', 'attribute']
#     fields = ['price', 'name', 'attribute', 'attribute']


# class ProductViewSet(viewsets.ModelViewSet):
#   queryset = Product.objects.all()
#   serializer_class = ProductSimpleSerializer
#   filter_backends = (DjangoFilterBackend,)
#   filterset_class = ProductFilter




