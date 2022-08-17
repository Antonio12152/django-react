from .models import User
from .serializers import UserSerializer
from rest_framework import generics

# Create your views here.

# class PostListCreate(generics.ListCreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


