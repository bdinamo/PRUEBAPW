# Generated by Django 3.2.9 on 2021-11-06 01:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_course_product'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notebook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=100)),
            ],
        ),
    ]