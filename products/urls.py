from django.urls import path
from . import views

urlpatterns = [
    path('', views.product_list),
    path('create/', views.create_product),
    path('get/<str:name>/', views.get_solo_product),
    path('update/<str:name>/', views.edit_product),
    path('delete/<int:pk>/', views.delete_product),
    # path('<str:name>/', views.product_detail),
    path('review/<int:pk>/', views.ReviewList.as_view()),
    path('review/<int:pk>/', views.ReviewDetail.as_view()),
    path('search/', views.search),
]