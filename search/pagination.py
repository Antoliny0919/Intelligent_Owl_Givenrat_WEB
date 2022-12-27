from collections import OrderedDict
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

class LargeResultsSetPagination(PageNumberPagination):
  page_size = 7

  def get_paginated_response(self, data):
    return Response(OrderedDict([
        ('count', self.page.paginator.count),
        ('next', self.page.has_next()),
        ('results', data),
    ]))
  
  
