from django.shortcuts import render
from .models import BuyerUser

# Create your views here.
def index(request) :
   return render(request,'index.html')

def contact(request) :
   return render(request,'contact.html')

def login(request) :
   if request.method == 'POST':
      email    = request.POST.get('loginemail', '').strip()
      password = request.POST.get('loginpassword', '')

      if not email:
         return render(request, 'login.html', {'error': 'Email is required.'})
      if not password:
         return render(request, 'login.html', {'error': 'Password is required.', 'loginemail': email})

      try:
         user = BuyerUser.objects.get(email=email)
         if user.password == password:
            return render(request, 'index.html', {'success': f'Welcome back, {user.firstName}!'})
         else:
            return render(request, 'login.html', {'error': 'Incorrect password.', 'loginemail': email})
      except BuyerUser.DoesNotExist:
         return render(request, 'login.html', {'error': 'No account found with this email.', 'loginemail': email})

   return render(request,'login.html')

def signup(request) :
   if request.method == 'POST':
      fname   = request.POST.get('signupfname', '').strip()
      lname   = request.POST.get('signuplname', '').strip()
      email   = request.POST.get('signupemail', '').strip()
      mobile  = request.POST.get('signupmobile', '').strip()
      address = request.POST.get('signupaddress', '').strip()
      password         = request.POST.get('signuppassword', '')
      confirm_password = request.POST.get('signupconfirmpassword', '')

      if BuyerUser.objects.filter(email=email).exists():
         return render(request, 'signup.html', {'email_error': 'This email is already registered.'})

      if password == confirm_password:
         BuyerUser.objects.create(
            firstName       = fname,
            lastName        = lname,
            mobile          = mobile,
            email           = email,
            address         = address,
            profile_picture = request.FILES.get('profile_picture'),
            password        = password
         )
         return render(request, 'login.html', {'success': 'Account created successfully! Please login.'})

   return render(request, 'signup.html')
