from django.db import models
from  django.core.validators import MaxValueValidator,MinValueValidator

# Create your models here.
# class Post(models.Model):
#     title = models.CharField(max_length=150,db_index=True)
#     slug = models.SlugField(max_length=150,unique=True)
#     body = models.TextField(blank=True,db_index=True)
#     date_pub = models.DateField(auto_now_add=True)
#
#     def __str__(self):
#         return self.title
#     class Meta:
#         ordering=['-date_pub']

class User(models.Model):
    name = models.CharField(max_length=50)
    age = models.PositiveIntegerField(default=18,validators=[MinValueValidator(5),MaxValueValidator(110)])
    country = models.CharField(max_length=50)
    company = models.CharField(max_length=50)

