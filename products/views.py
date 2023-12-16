from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
#from django.utils.text import slugify

from . permissions import IsOwnerOrReadOnly
from . models import Producto, Review
from . serializers import ProductSerializer, ReviewSerializer
from backend.pagination import CustomPagination
from users.models import User
from users.serializers import UserSerializer

@api_view(['GET'])
def search(request):
    query = request.query_params.get('query')
    if query is None:
        query = ''
    product = Producto.objects.filter(nombre__icontains=query)
    serializer = ProductSerializer(product, many=True)
    return Response({ 'products' : serializer.data})



'''
@api_view(['GET'])
def mi_vista(request):
    queryset = MiModelo.objects.all().distinct('campo_deseado')
    serializer = MiModeloSerializer(queryset, many=True)
    return Response(serializer.data)
'''

@api_view(['GET'])
def get_prod_by_cate(request, category):
    products = Producto.objects.filter(categoria__nombre=category)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)



@api_view(['POST'])
def create_product(request):
    if request.user.is_staff:
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(usuario=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Imprime los errores de validación para depuración
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['GET'])
def product_list(request):
    products = Producto.objects.all().order_by('nombre') # se debe añadir un order by
    paginator = CustomPagination()
    paginated_products = paginator.paginate_queryset(products, request)
    serializer = ProductSerializer(paginated_products, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
def get_solo_product(request, id):
    product = Producto.objects.get(id=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['GET'])
def get_product_client(request, nombre):
    product = Producto.objects.get(nombre=nombre)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['PUT'])
def edit_product(request, name):
    producto = Producto.objects.get(nombre=name)
    if request.user.is_staff:
        serializer = ProductSerializer(producto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    print(request.data)    
    return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(['DELETE'])
def delete_product(request, name):
    product = Producto.objects.get(nombre=name)
    if request.user.is_staff:
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_401_UNAUTHORIZED)

'''@api_view(['GET'])
def search(request):
    query = request.query_params.get('query')
    if query is None:
        query = ''
    prod = Producto.objects.filter(name__icontains=query)
    serializer = ProductSerializer(prod, many=True)
    return Response({'products': serializer.data})'''


class ReviewList(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

@api_view(['GET'])
def get_product_admin(request, id):
    products = Producto.objects.get(id=id)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)
