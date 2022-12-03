from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class User(AbstractUser):
  company_name = models.CharField(max_length=100, null=True)
  company_phone_number = PhoneNumberField(unique=True, null=True)
  fax_number = PhoneNumberField(blank=True, null=True)
  
  



  
  
