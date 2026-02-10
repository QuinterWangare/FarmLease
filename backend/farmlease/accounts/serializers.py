from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ("id", "username", "email", "phone_number", "role", "password")

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
# Create a custom serializer by subclassing the default one
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    # Override the get_token method to customize the token payload
    @classmethod
    def get_token(cls, user):
        # Call the parent class's get_token method
        # This generates the standard JWT with default claims (user_id, exp, etc.)
        token = super().get_token(user)

        # Add custom claims to the token
        # These are extra fields you want included in the JWT payload
        token['role'] = user.role        # Add the user's role (e.g., admin, editor)
        token['username'] = user.username  # Add the user's username

        # Return the modified token with both default and custom claims
        return token
