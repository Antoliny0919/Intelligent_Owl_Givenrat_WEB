# Generated by Django 4.1.1 on 2022-12-03 02:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.AddField(
            model_name='user',
            name='test',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='user',
            name='test2',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
