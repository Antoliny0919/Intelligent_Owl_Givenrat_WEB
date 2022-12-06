from django.shortcuts import render

# Create your views here.


def loginpage(request):
  return render(request, 'users/login_page/build/login_page.html')
