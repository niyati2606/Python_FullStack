from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ExpenseViewSet, RegisterView, SummaryView

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'expenses', ExpenseViewSet, basename='expense')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('summary/', SummaryView.as_view(), name='summary'),
    path('', include(router.urls)),
]
