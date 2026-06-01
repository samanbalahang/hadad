from django.db import models

# Create your models here.
class frontpage(models.Model):
    mainheading = models.CharField(max_length=200)
    firstimage = models.ImageField(upload_to='portfolios/')
    slogon    = models.CharField(max_length=200)
    