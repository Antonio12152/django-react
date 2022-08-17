from .models import Post
from .serializers import PostSerializer
from rest_framework import generics

# Create your views here.

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
