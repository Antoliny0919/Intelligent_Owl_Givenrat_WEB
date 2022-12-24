from django_filters.rest_framework import DjangoFilterBackend
from django.db.models.query import QuerySet
from django.shortcuts import render, get_object_or_404

from rest_framework.settings import api_settings
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

class CustomAPIView(APIView):
  
  queryset = None
  filter_backends = api_settings.DEFAULT_FILTER_BACKENDS

  def get_queryset(self):
    """
    Get the list of items for this view.
    This must be an iterable, and may be a queryset.
    Defaults to using `self.queryset`.
    This method should always be used rather than accessing `self.queryset`
    directly, as `self.queryset` gets evaluated only once, and those results
    are cached for all subsequent requests.
    You may want to override this if you need to provide different
    querysets depending on the incoming request.
    (Eg. return a list of items that is specific to the user)
    """
    assert self.queryset is not None, (
        "'%s' should either include a `queryset` attribute, "
        "or override the `get_queryset()` method."
        % self.__class__.__name__
    )

    queryset = self.queryset
    if isinstance(queryset, QuerySet):
        # Ensure queryset is re-evaluated on each request.
        queryset = queryset.all()
    return queryset
  
  def filter_queryset(self, queryset):
    """
    Given a queryset, filter it with whichever filter backend is in use.
    You are unlikely to want to override this method, although you may need
    to call it either from a list view, or from a custom `get_object`
    method if you want to apply the configured filtering backend to the
    default queryset.
    """
    for backend in list(self.filter_backends):
        queryset = backend().filter_queryset(self.request, queryset, self)
    return queryset


class ProductListAPIView(CustomAPIView, LargeResultsSetPagination):
  
  def get(self, request):
    if request.GET["exact_price"] or request.GET["contains_name"] or request.GET["contains_first_attribute"] or request.GET["contains_second_attribute"]:
      queryset = self.filter_queryset(self.get_queryset())
      serializer = ProductSerializer(queryset)
      response = Response(serializer.data, status=status.HTTP_200_OK)
      return response
      # product = get_object_or_404(Product, price=request.GET["exact_price"],
      #                 name=request.GET["contains_name"],
      #                 attribute=(request.GET["contains_first_attribute"], request.GET["contains_second_attribute"]),
      #                 )
      # serializer = ProductSerializer(product)
      # response = Response(serializer.data, status=status.HTTP_200_OK)
      # return response
    else:
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
#   serializer_class = ProductSerializer
#   filter_backends = (DjangoFilterBackend,)
#   filterset_class = ProductFilter




