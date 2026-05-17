from django.db import models

# Create your models here.
class BuyerUser(models.Model) :
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.EmailField()
    mobile = models.PositiveIntegerField()
    address = models.TextField()
    password = models.CharField()
    profile_picture = models.ImageField(upload_to="profile_picture/")

    def __str__(self):
        return self.firstName + " " +self.lastName