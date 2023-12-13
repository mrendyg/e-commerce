# Generated by Django 4.2.6 on 2023-12-13 01:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0015_rename_user_producto_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='usuario',
            field=models.ForeignKey(default=5, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]