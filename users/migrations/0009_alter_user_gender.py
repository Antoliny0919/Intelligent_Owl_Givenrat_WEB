# Generated by Django 4.1.1 on 2022-12-04 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_user_company_phone_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('MAN', 'Man'), ('WOMAN', 'Woman'), ('DO NOT SELECT', 'Do Not Select')], default='DO NOT SELECT', max_length=13, null=True),
        ),
    ]
