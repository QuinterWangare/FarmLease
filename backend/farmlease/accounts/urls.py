from django.urls import path
from .views import (
    RegisterView, 
    LogoutView, 
    get_user_profile, 
    MyTokenObtainPairView
)
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'), # Using our custom view
    path('refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('me/', get_user_profile, name='get_user_profile'),
]