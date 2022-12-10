import datetime
from django.db import models
from django.apps import apps
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password
from django.contrib.auth.base_user import BaseUserManager
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class CustomUserManager(BaseUserManager):
    use_in_migrations = True


    # company_name, company_phone_number, fax_number, company_address -> essential input data

    def _create_user(self, username, email, password, company_name, company_phone_number,
                    fax_number, company_address, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not username:
            raise ValueError("The given username must be set")
        email = self.normalize_email(email)
        # Lookup the real model class from the global app registry so this
        # manager method can be used in migrations. This is fine because
        # managers are by definition working on the real model.
        GlobalUserModel = apps.get_model(
            self.model._meta.app_label, self.model._meta.object_name
        )
        username = GlobalUserModel.normalize_username(username)
        user = self.model(username=username, 
                        email=email, 
                        company_name=company_name,
                        company_phone_number=company_phone_number,
                        fax_number=fax_number, 
                        company_address=company_address,
                        **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email, password, company_name, company_phone_number,
                    fax_number, company_address, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(username, email, password, company_name, company_phone_number, 
                                fax_number, company_address, **extra_fields)

    def create_superuser(self, username, email, password, company_name, company_phone_number,
                        fax_number, company_address, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(username, email, password, company_name, company_phone_number, 
                                fax_number, company_address, **extra_fields)



class User(AbstractUser):

    objects = CustomUserManager()

    MAN = 'MAN'
    WOMAN = 'WOMAN'
    NOT_CHOICE = 'DO NOT SELECT'

    GENDER_CHOICES = [
    (MAN, 'Man'),
    (WOMAN, 'Woman'),
    (NOT_CHOICE, 'Do Not Select'),
    ]

    email = models.EmailField(("email address"), max_length=150, unique=True, blank=False)
    company_name = models.CharField(max_length=100)
    company_phone_number = models.CharField(max_length=100, unique=True)
    fax_number = models.CharField(max_length=100, unique=True)
    company_address = models.CharField(max_length=256)

    # gender & birthdate 는 필수 입력 사항 x --> blank = True
    gender = models.CharField(max_length= 13, choices=GENDER_CHOICES, default=NOT_CHOICE, blank=True)
    birthdate = models.DateField(blank=True, default=datetime.date.today)

    REQUIRED_FIELDS = ["email", "company_name", "company_phone_number", "fax_number", "company_address"]
