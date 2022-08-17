from django.urls import path
from . import views

urlpatterns = [
    path('api/user/',views.UserListCreate.as_view()),
    # path('posts/api/post/', views.PostListCreate.as_view()),
]
