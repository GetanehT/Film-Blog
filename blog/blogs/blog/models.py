from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify



# Create your models here.

class Categories(models.TextChoices):
    WORLD = 'world'   
    Technology = 'technology'
    TRAVEL = 'travel'
    
        
class Post(models.Model):
    title = models.CharField(max_length=50)
    slug  = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.WORLD)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    contents =  models.TextField()
    futured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

   

    def __str__(self):
        return self.title       