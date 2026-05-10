from django.shortcuts import render
from .models import Contact

# Create your views here.

def index(request) : 
   return render(request,'index.html')

def contact(request) : 
   if request.method == "POST" :
   
      Contact.objects.create(
         name = request.POST['contactname'],
         email = request.POST['contactemail'],
         remarks = request.POST['contactremarks'],
         mobile = request.POST['contactmobile'],
      )   
      msg="Contact Saved Successfully"
      contacts=Contact.objects.all().order_by("-id")[:3]
      return render(request,'contact.html',{'msg':msg,'contacts':contacts})
   else:
      contacts=Contact.objects.all().order_by("-id")[:3]
      return render(request,'contact.html',{'contacts':contacts})

def login(request) : 
   return render(request,'login.html')

def signup(request) : 
   return render(request,'signup.html')