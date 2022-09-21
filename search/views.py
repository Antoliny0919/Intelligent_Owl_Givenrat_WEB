from django.shortcuts import render

# Create your views here.

def homepage(request):
  return render(request, 'search/base_navbar/build/base_navbar.html')