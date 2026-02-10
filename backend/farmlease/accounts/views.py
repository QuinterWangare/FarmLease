from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import User
from .serializers import RegisterSerializer, MyTokenObtainPairSerializer

# 1. Registration View
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer

# 2. Login View (Customized to include 'role' in the token)
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# 3. Logout View (Blacklists the refresh token)
class LogoutView(APIView):
    permission_classes = [IsAuthenticated] # User must be logged in to log out!

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Successfully logged out"}, status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)

# 4.The "Who Am I?" Endpoint:
# Used by the frontend (e.g., React) to immediately verify if the stored JWT is valid
# and fetch the logged-in user's profile details after a browser refresh.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    user = request.user
    return Response({
        "id": user.id,
        "username": user.username,
        "role": user.role,
        "email": user.email,
        "phone": user.phone_number
    })


