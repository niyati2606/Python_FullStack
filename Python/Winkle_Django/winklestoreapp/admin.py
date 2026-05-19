from django.contrib import admin
from .models import BuyerUser,Product

# Register your models here.
admin.site.register(BuyerUser)
admin.site.register(Product)