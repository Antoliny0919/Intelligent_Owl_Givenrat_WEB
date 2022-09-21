from django.shortcuts import render

# Create your views here.

def homepage(request):
  return render(request, 'search/homepage_main/build/homepage.html')

