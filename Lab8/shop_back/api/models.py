from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(max_length=1000)
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
class Category(models.Model):
    name = models.CharField(max_length=255)
