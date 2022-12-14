from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import (
    AdminPasswordChangeForm,
    UserChangeForm,
    UserCreationForm,
)
from .models import User

# Register your models here.

class CustomUserAdmin(UserAdmin):
    
    add_form_template = "admin/auth/user/add_form.html"
    change_user_password_template = None
    
    # Change Userpage to be displayed field(admin site)
    fieldsets = (
        (None, {"fields": ("username", "password"),}),
        (("Personal info"), {"fields": ("email", "gender", "birthdate"),}),
        (("Company Info"), {"fields": ("company_name", "company_phone_number", "fax_number", "company_address")}),
        (
            ("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                ),
            },
        ),
    )
    # Add Userpage to be displayed field(admin site)
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("username", "password1", "password2",
                            "company_name", "company_phone_number", "fax_number",
                            "company_address"),
            },
        ),
    )
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm
    list_display = ("username", "email", "company_name", "company_address")
    list_filter = ("is_superuser",)
    search_fields = ("username", "email", "company_name", "company_address",
                    "fax_number", "company_phone_number", "company_address")
    ordering = ("username",)
    filter_horizontal = (
        "groups",
        "user_permissions",
    )





admin.site.register(User, CustomUserAdmin)





