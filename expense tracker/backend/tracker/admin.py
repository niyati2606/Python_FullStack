from django.contrib import admin
from .models import Category, Expense

# username : admin 
# password : admin123

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'user')
    search_fields = ('name', 'user__username')
    list_filter = ('user',)

@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'amount', 'date', 'category', 'user')
    search_fields = ('title', 'note', 'user__username')
    list_filter = ('date', 'category', 'user')
