# Generated by Django 5.1.4 on 2024-12-15 22:03

import ckeditor.fields
import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('world', 'World'), ('technology', 'Technology'), ('travel', 'Travel')], default='world', max_length=50)),
                ('thumbnail', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('excerpt', models.CharField(max_length=150)),
                ('month', models.CharField(max_length=3)),
                ('day', models.CharField(max_length=2)),
                ('contents', ckeditor.fields.RichTextField()),
                ('featured', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
