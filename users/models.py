from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class User(AbstractUser):
  MAN = 'MAN'
  WOMAN = 'WOMAN'
  NOT_CHOICE = 'DO NOT SELECT'
  
  GENDER_CHOICES = [
    (MAN, 'Man'),
    (WOMAN, 'Woman'),
    (NOT_CHOICE, 'Do Not Select'),
  ]

  email = models.EmailField(("email address"), max_length=150, default="")
  company_name = models.CharField(max_length=100, default="")
  company_phone_number = PhoneNumberField(default="")
  fax_number = PhoneNumberField(default="")
  company_address = models.CharField(max_length=256, default="")
  
  # gender & birthdate 는 필수 입력 사항 x --> null = True
  gender = models.CharField(max_length= 13, choices=GENDER_CHOICES, default=NOT_CHOICE, blank=True)
  birthdate = models.DateField(blank=True)
  
  
  



  
  
