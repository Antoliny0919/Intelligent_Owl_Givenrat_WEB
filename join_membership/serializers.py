from rest_framework import serializers
from users.models import User

class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'email', 'password', 'company_name', 'company_phone_number', 'fax_number', 'company_address')
    
  
  