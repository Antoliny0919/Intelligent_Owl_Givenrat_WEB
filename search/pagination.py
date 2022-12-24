from rest_framework.pagination import PageNumberPagination

class LargeResultsSetPagination(PageNumberPagination):
  page_size = 7
  page_size_query_param = 'page_size'
