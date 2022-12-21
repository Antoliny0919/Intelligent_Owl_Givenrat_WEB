from rest_framework.pagination import PageNumberPagination

class LargeResultsSetPagination(PageNumberPagination):
  page_query_param = 'paged'
  page_size = 3
  page_size_query_param = 'page_size'
  max_page_size = 1