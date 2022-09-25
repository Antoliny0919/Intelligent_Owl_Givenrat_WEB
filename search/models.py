from django.db import models

# Create your models here.

class Product(models.Model):
  name = models.CharField(max_length=50)
  attribute = models.CharField(max_length=200)
  brand = models.CharField(max_length=20)
  price = models.IntegerField()
  code_number = models.IntegerField(blank=True)
  
  def __str__(self) -> str:
    return self.name

