from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])
    username = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = ("id", "username", "email", "phone_number", "role", "password")

    def create(self, validated_data):
        # If no username provided, use email as username
        if 'username' not in validated_data or not validated_data['username']:
            validated_data['username'] = validated_data['email'].split('@')[0]
        user = User.objects.create_user(**validated_data)
        return user

# Create a custom serializer by subclassing the default one
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    # Since USERNAME_FIELD is now email, this will work automatically
    
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
        token['email'] = user.email  # Add email to token
        token['is_staff'] = user.is_staff  # Add staff status

        # Return the modified token with both default and custom claims
        return token
