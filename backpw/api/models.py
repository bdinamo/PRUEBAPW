from django.db import models

# Create your models here.

class Monitores(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    price = models.CharField(max_length=10)


class Notebook(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    price = models.CharField(max_length=10)

class Procesadores(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    price = models.CharField(max_length=10)

