from django.db import models

# Create your models here.

class Product(models.Model):
  name = models.CharField(max_length=100)
  attribute = models.CharField(max_length=200)
  brand = models.CharField(max_length=20)
  price = models.IntegerField()
  code_number = models.CharField(max_length=50, blank=True, default="")
  
  def __str__(self) -> str:
    return self.name
  
  class Meta():
    ordering = ['id']
  