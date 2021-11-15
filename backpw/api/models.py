from django.db import models

# Create your models here.

class Products(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    price = models.CharField(max_length=10)
    tipoproducto = models.CharField(max_length=15)

