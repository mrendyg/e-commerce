# Generated by Django 4.2.6 on 2023-12-04 16:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_alter_producto_imagen'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='producto',
            name='activo',
        ),
    ]
