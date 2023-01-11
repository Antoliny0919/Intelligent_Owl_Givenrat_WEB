from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
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
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
