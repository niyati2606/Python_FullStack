from django.contrib.auth.models import User
from django.db.models import Sum
from rest_framework import status, viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Category, Expense
from .serializers import CategorySerializer, ExpenseSerializer

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username', '').strip()
        password = request.data.get('password', '').strip()

        if not username:
            return Response(
                {'error': 'Username cannot be empty.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if not password:
            return Response(
                {'error': 'Password cannot be empty.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if User.objects.filter(username=username).exists():
            return Response(
                {'error': 'Username already exists.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        User.objects.create_user(username=username, password=password)
        return Response(
            {'message': 'User registered successfully.'},
            status=status.HTTP_201_CREATED
        )

class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.filter(user=self.request.user).order_by('name')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ExpenseViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ExpenseSerializer

    def get_queryset(self):
        qs = Expense.objects.filter(user=self.request.user).order_by('-date', '-id')
        month = self.request.query_params.get('month')
        category = self.request.query_params.get('category')

        if month:
            qs = qs.filter(date__startswith=month)
        if category:
            qs = qs.filter(category_id=category)

        return qs

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SummaryView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        qs = Expense.objects.filter(user=request.user)
        month = request.query_params.get('month')

        if month:
            qs = qs.filter(date__startswith=month)

        total_agg = qs.aggregate(total=Sum('amount'))['total']
        total = float(total_agg) if total_agg is not None else 0.0

        by_category_raw = (
            qs.values('category__name')
            .annotate(total=Sum('amount'))
            .order_by('-total')
        )

        by_category = [
            {
                'category__name': item['category__name'] if item['category__name'] else 'Uncategorized',
                'total': float(item['total'])
            }
            for item in by_category_raw
        ]

        return Response({
            'total': total,
            'by_category': by_category
        })
