from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from users.models import User


# Create your views here.

def loginpage(request):
  return render(request, 'users/login_page/build/login_page.html')

class loginAPIView(APIView):
  
  def get(request):
    users = get_object_or_404(User, id=request.GET["id"], password=request.GET["password"])
    
    