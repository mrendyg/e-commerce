from django.urls import path
from . import views

urlpatterns = [
    path('search/', views.search),
    path('', views.product_list),
    path('create/', views.create_product),
    path('get/<int:id>/', views.get_solo_product),
    path('get/client/<str:nombre>/', views.get_product_client),
    path('update/<str:name>/', views.edit_product),
    path('delete/<str:name>/', views.delete_product),
    path('review/<str:name>/', views.ReviewList.as_view()),
    path('review/<str:name>/', views.ReviewDetail.as_view()),
    path('cate/<str:category>/', views.get_prod_by_cate),
    path('get/admin/<int:id>/', views.get_product_admin),
]