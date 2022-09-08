from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=150,db_index=True)
    body = models.TextField(blank=True,db_index=True)
    date_pub = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['-pk']
