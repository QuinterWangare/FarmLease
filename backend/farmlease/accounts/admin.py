from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

class UserAdmin(BaseUserAdmin):
    # Fields to display in the list view
    list_display = ("username", "email", "role", "is_staff", "is_active")
    
    # Fields to filter by
    list_filter = ("role", "is_staff", "is_active")
    
    # Fields to show when editing a user
    fieldsets = (
        (None, {"fields": ("username", "email", "password")}),
        ("Personal Info", {"fields": ("first_name", "last_name", "phone_number")}),
        ("Permissions", {"fields": ("role", "is_staff", "is_active", "is_superuser", "groups", "user_permissions")}),
        ("Important Dates", {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("username", "email", "role", "phone_number", "password1", "password2", "is_staff", "is_active"),
        }),
    )

    search_fields = ("username", "email", "phone_number")
    ordering = ("username",)
    filter_horizontal = ("groups", "user_permissions",)

# Register your User model
admin.site.register(User, UserAdmin)