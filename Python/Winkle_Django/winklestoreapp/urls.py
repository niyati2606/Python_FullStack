from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name="index"),
    path('contact/',views.contact,name="contact"),
    path('login/',views.login,name="login"),
    path('signup/',views.signup,name="signup"),
    path('blog/',views.blog,name="blog"),
    path('about/',views.about,name="about"),
    path('single_blog/',views.single_blog,name="single_blog"),
    path('logout/', views.logout, name='logout'),
    path('profile/', views.profile, name='profile'),
    path('cart/',views.cart, name="cart"),
    path('shop/', views.shop, name='shop'),
    path('product/<int:product_id>/', views.product_detail, name='product_detail'),
    path('change_password/', views.change_password, name='change_password'),
    path('seller/', views.seller_index, name='seller_index'),
    path('seller/seller-profile',views.seller_profile,name="seller_profile"),
    path('seller/seller-change-password',views.seller_change_password,name="seller_change_password"),
    path('seller/add-product/', views.add_product, name='add_product'),
    path('seller/all-products/', views.seller_products, name='seller_products'),
    path('seller/edit-product/<int:product_id>/', views.edit_product, name='edit_product'),
    path('seller/delete-product/<int:product_id>/', views.delete_product, name='delete_product'),
]
