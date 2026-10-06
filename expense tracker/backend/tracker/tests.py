from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from rest_framework import status
from .models import Category, Expense

class BackendApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='password123')
        self.other_user = User.objects.create_user(username='otheruser', password='password123')

    def authenticate(self, user):
        response = self.client.post('/api/token/', {
            'username': user.username,
            'password': 'password123'
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        token = response.data['access']
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        return response.data

    def test_register_empty_fields(self):
        res = self.client.post('/api/register/', {'username': '', 'password': '123'})
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('error', res.data)

        res = self.client.post('/api/register/', {'username': 'newuser', 'password': ''})
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('error', res.data)

    def test_register_duplicate_username(self):
        res = self.client.post('/api/register/', {'username': 'testuser', 'password': '123'})
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('error', res.data)

    def test_register_success(self):
        res = self.client.post('/api/register/', {'username': 'freshuser', 'password': 'strongpassword'})
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(username='freshuser').exists())

    def test_token_obtain_and_refresh(self):
        tokens = self.authenticate(self.user)
        self.assertIn('access', tokens)
        self.assertIn('refresh', tokens)

        # Test refresh
        res = self.client.post('/api/token/refresh/', {'refresh': tokens['refresh']})
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertIn('access', res.data)

    def test_category_crud_and_isolation(self):
        self.authenticate(self.user)
        # Create category
        res = self.client.post('/api/categories/', {'name': 'Food'})
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        cat_id = res.data['id']

        # List
        res = self.client.get('/api/categories/')
        self.assertEqual(len(res.data), 1)
        self.assertEqual(res.data[0]['name'], 'Food')

        # Other user should not see this category
        self.authenticate(self.other_user)
        res_other = self.client.get('/api/categories/')
        self.assertEqual(len(res_other.data), 0)

    def test_expense_crud_filtering_and_summary(self):
        self.authenticate(self.user)
        cat_food = Category.objects.create(user=self.user, name='Food')
        cat_bills = Category.objects.create(user=self.user, name='Bills')

        # Create expenses
        e1 = self.client.post('/api/expenses/', {
            'title': 'Groceries',
            'amount': '150.50',
            'date': '2026-05-10',
            'note': 'Weekly market',
            'category': cat_food.id
        })
        self.assertEqual(e1.status_code, status.HTTP_201_CREATED)
        self.assertEqual(e1.data['category_name'], 'Food')

        e2 = self.client.post('/api/expenses/', {
            'title': 'Dinner',
            'amount': '49.50',
            'date': '2026-05-15',
            'note': 'Restaurant',
            'category': cat_food.id
        })
        self.assertEqual(e2.status_code, status.HTTP_201_CREATED)

        e3 = self.client.post('/api/expenses/', {
            'title': 'Electricity',
            'amount': '100.00',
            'date': '2026-06-01',
            'note': 'Monthly bill',
            'category': cat_bills.id
        })
        self.assertEqual(e3.status_code, status.HTTP_201_CREATED)

        # Test listing & ordering (-date)
        res = self.client.get('/api/expenses/')
        self.assertEqual(len(res.data), 3)
        self.assertEqual(res.data[0]['title'], 'Electricity')

        # Test filtering by month
        res_may = self.client.get('/api/expenses/?month=2026-05')
        self.assertEqual(len(res_may.data), 2)

        # Test filtering by category
        res_bills = self.client.get(f'/api/expenses/?category={cat_bills.id}')
        self.assertEqual(len(res_bills.data), 1)
        self.assertEqual(res_bills.data[0]['title'], 'Electricity')

        # Test summary for 2026-05
        res_sum = self.client.get('/api/summary/?month=2026-05')
        self.assertEqual(res_sum.status_code, status.HTTP_200_OK)
        self.assertAlmostEqual(res_sum.data['total'], 200.00)
        self.assertEqual(len(res_sum.data['by_category']), 1)
        self.assertEqual(res_sum.data['by_category'][0]['category__name'], 'Food')
        self.assertAlmostEqual(res_sum.data['by_category'][0]['total'], 200.00)

        # Test summary for 2026-06
        res_sum_june = self.client.get('/api/summary/?month=2026-06')
        self.assertEqual(res_sum_june.status_code, status.HTTP_200_OK)
        self.assertAlmostEqual(res_sum_june.data['total'], 100.00)

        # Delete expense
        exp_id = e1.data['id']
        del_res = self.client.delete(f'/api/expenses/{exp_id}/')
        self.assertEqual(del_res.status_code, status.HTTP_204_NO_CONTENT)
