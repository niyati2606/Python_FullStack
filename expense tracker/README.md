💸 Expense Tracker

A full-stack expense tracking web app built with Django REST Framework and React (Vite). Users can sign up, log in, record their expenses, organise them into custom categories, and view monthly summaries with a category-wise pie chart.

✨ Features
User authentication – registration and login using JWT (access + refresh tokens), with automatic token refresh on expiry
Expense management – add, view, edit, and delete expenses (title, amount, date, note, category)
Custom categories – every user creates and manages their own categories
Filtering – filter expenses by month and by category
Monthly summary – total spending plus a breakdown by category, visualised with a pie chart
Data isolation – each user can only see and modify their own expenses and categories
Protected routes – unauthenticated users are redirected to the login page
Responsive UI – built with Bootstrap 5


🛠️ Tech Stack
Layer	Technologies
Frontend	React 18, Vite, React Router v6, Axios, Bootstrap 5, Recharts
Backend	Django, Django REST Framework, SimpleJWT, django-cors-headers
Database	SQLite (default)