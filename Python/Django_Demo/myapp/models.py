from django.db import models

# Create your models here.
class Contact(models.Model) :
    name = models.CharField(max_length=100)
    email = models.EmailField()
    remarks = models.TextField()
    mobile = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class User(models.Model) : 
    firstName=models.CharField(max_length=100)
    lastName=models.CharField(max_length=100)
    email=models.EmailField()
    mobile=models.PositiveIntegerField()
    address=models.TextField()
    profile_picture=models.ImageField(upload_to="profile_picture/")
    password=models.CharField(max_length=100)

    def __str__(self):
        return self.firstName+" "+self.lastName 