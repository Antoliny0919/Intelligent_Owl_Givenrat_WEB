from rest_framework import serializers
from .models import Product

class ProductSimpleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ('name', 'attribute', 'brand', 'price', 'code_number')
