from django.db import models
from datetime imoprt datetime
from django.template.defaultfilters import  



# Create your models here.

class Categories(models.TextChoices):
    WORLD = 'word'   
    Technology = 'word'
    TRAVEL = 'word'
    
class Blogpost(models.Model):
    title = models.charField(max_length=50)
    slug  = models.SlugField()
    category = models.charField(max_length=50, choices=categories.choices, default=categories.WORLD)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    except = models.charField(max_length=150)
    month = models.charField(max_length=3)
    day = models.charField(max_length=2)models
    content =  models.TextField()
    futured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = Blogpost.objects.all().filter(slug_ieexact=original_slug).count()

        count = 1 
        slug = original_slug
        while(queryset):
            slug = original_slug +'-' + str(count)
            count +=1
            queryset = Blogpost.objects.all().filter(slug_ieexact=original_slug).count()

       self.slug = slug 

       if self.featured:
          try:
          
          except Blogpost.object.get(featured=True)
           if 

