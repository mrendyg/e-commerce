from django.urls import path
from . import views

urlpatterns = [
    path('search/', views.search),
    path('', views.product_list),
    path('create/', views.create_product),
    path('get/<str:name>/', views.get_solo_product),
    path('update/<str:name>/', views.edit_product),
    path('delete/<str:name>/', views.delete_product),
    # path('<str:name>/', views.product_detail),
    path('review/<str:name>/', views.ReviewList.as_view()),
    path('review/<str:name>/', views.ReviewDetail.as_view()),
    
]