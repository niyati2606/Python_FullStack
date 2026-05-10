from django.shortcuts import render
from .models import Contact,User

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
   if request.method == "POST" :
      try:
            user=User.objects.get(email=request.POST['email'])
            if user.password==request.POST['password']:
                request.session['email']=user.email
                request.session['firstName']=user.firstName
                request.session['profile_picture']=user.profile_picture.url
                return render(request,'index.html')
            else:
                msg="Incorrect Password"
                return render(request,'login.html',{'msg':msg})
      except:
            msg="Email Not Registered"
            return render(request,'login.html',{'msg':msg})
   else:
        return render(request,'login.html')
   
def signup(request):
 
      msg = None
      if request.method == "POST" :
         try : 
            User.objects.get(email = request.POST['signupemail'])
            msg = "Email Already registered"
            return render(request,'signup.html',{'msg' : msg})
         except : 
            if request.POST['password'] == request.POST['confirmPassword'] : 
               User.objects.create(
                  firstName = request.POST['signupfname'],
                  lastName = request.POST['signuplname'],
                  mobile = request.POST['signupmobile'],
                  email = request.POST['signupemail'],
                  address = request.POST['signupaddress'],
                  profile_picture = request.FILES['profile_picture'],
                  password = request.POST['password']
               )
               msg="User Sign Up Successfully"
               return render(request,'signup.html',{'msg' : msg})
            else :
               msg = "Password and confirm password doesn't match"
               return render(request,'signup.html',{'msg' : msg})
      else :
         return render(request,'signup.html')
      
def logout(request):
    try:
        del request.session['email']
        del request.session['fname']
        del request.session['profile_picture']
        msg="User Logged Out Successfully"
        return render(request,'login.html',{'msg':msg})
    except:
        msg="User Logged Out Successfully"
        return render(request,'login.html',{'msg':msg})
    
def profile(request):
    user=User.objects.get(email=request.session['email'])
    if request.method=="POST":
        user.fname=request.POST['fname']
        user.lname=request.POST['lname']
        user.mobile=request.POST['mobile']
        user.address=request.POST['address']
        try:
            user.profile_picture=request.FILES['profile_picture']
        except:
            pass
        user.save()
        request.session['profile_picture']=user.profile_picture.url
        msg="Profile Updated Successfully"
        return render(request,'profile.html',{'msg':msg,'user':user})
    else:
        return render(request,'profile.html',{'user':user})
    
def change_password(request):
    user=User.objects.get(email=request.session['email'])
    if request.method=="POST":
        if user.password==request.POST['old_password']:
            if request.POST['new_password']==request.POST['cnew_password']:
                if request.POST['new_password']!=request.POST['old_password']:
                    user.password=request.POST['new_password']
                    user.save()
                    del request.session['email']
                    del request.session['fname']
                    del request.session['profile_picture']
                    msg="Password Changed Successfully"
                    return render(request,'login.html',{'msg':msg})
                else:
                    msg="Your New Password Can't Be From Your Old Password"
                    return render(request, 'change-password.html',{'msg':msg})
            else:
                msg="Your New Password & Confirm New Password Does Not Matched"
                return render(request, 'change-password.html',{'msg':msg})
        else:
            msg="Your Old Password Does Not Matched"
            return render(request, 'change-password.html',{'msg':msg})
    else:
        return render(request, 'change-password.html')