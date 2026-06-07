from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class frontpage(models.Model):
    mainheading      = models.CharField(max_length=200)
    firstimage       = models.ImageField(upload_to='portfolios/')
    slogon           = models.CharField(max_length=200)
    about            = RichTextField()
    contactmeheading = models.CharField(max_length=200)
    contactme        = RichTextField()
    social1          = models.URLField(blank=True)
    social2          = models.URLField(blank=True)
    social3          = models.URLField(blank=True)
    social4          = models.URLField(blank=True)
    social5          = models.URLField(blank=True)
    created_at       = models.DateTimeField(auto_now_add=True)