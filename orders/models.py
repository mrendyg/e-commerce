from django.db import models
from products.models import Producto as Product, Categoria as Category
from users.models import User

class Pedido(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_pedido = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'Pedido'


class DetallePedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    producto = models.ForeignKey('products.Producto', on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    monto_total = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_pedido = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'DetallePedido'


class Carrito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    producto = models.ForeignKey(Product, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    fecha_crea = models.DateTimeField(auto_now_add=True)   #se debe agregar categoria? 
    class Meta:
        db_table = 'Carrito'    