from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.

class CustomUserAdmin(UserAdmin):
  
    
      
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                # admin페이지 user 추가시 입력사항 form 추가
                "fields": ("username", "password1", "password2", "email", "company_name", "company_phone_number",
                          "fax_number", "company_address", "gender", "birthdate"),
            },
        ),
    )





admin.site.register(User, CustomUserAdmin)





