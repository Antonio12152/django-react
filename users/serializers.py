from rest_framework import serializers
from  .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','age','country','company')

# class PostSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Post
#         fields = ('id','title','slug','body')
