# Generated by Django 4.2.6 on 2024-03-05 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0021_alter_producto_nombre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='code',
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='producto',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
    ]