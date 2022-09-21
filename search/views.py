from django.shortcuts import render

# Create your views here.

def homepage(request):
  return render(request, 'search/homepage_main/build/homepage.html')

def searchpage(request):
  return render(request, 'search/search_page/build/search_page.html')