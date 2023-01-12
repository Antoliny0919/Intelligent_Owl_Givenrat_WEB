from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import (
  TokenObtainPairSerializer
)
from .serializers import RegisterSerializer


# Create your views here.

def join_membership_page(request):
  return render(request, 'join_membership/join_membership_page/build/join_membership_page.html')


class RegisterView(APIView):
  """_summary_
  Args:
      APIView (_type_): _description_
  """
  
  def post(self, request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
      user = serializer.save()
      token = TokenObtainPairSerializer.get_token(user)
      refresh_token = str(token)
      access_token = str(token.access_token)
      response = Response(
        {
          "user": serializer.data,
          "message": "register success!",
          "token": {
            "access": access_token,
            "refresh": refresh_token,
          },
        },
        status=status.HTTP_201_CREATED
      )
      return response
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
