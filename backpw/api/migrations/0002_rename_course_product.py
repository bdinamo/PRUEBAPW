# Generated by Django 3.2.8 on 2021-11-03 01:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Course',
            new_name='Product',
        ),
    ]