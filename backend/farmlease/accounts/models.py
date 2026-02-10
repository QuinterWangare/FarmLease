from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    ROLE_CHOICES = (
        ("farmer", "Farmer"),
        ("landowner", "Landowner"),
        ("dealer", "Agro-Dealer"),
           )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    phone_number = models.CharField(max_length=15, unique=True)

    def __str__(self):
        return f"{self.username} ({self.role})"

