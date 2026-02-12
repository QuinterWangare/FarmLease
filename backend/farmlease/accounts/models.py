from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """
    Custom User model for FarmLease application
    Supports multiple user roles: Farm Owner, Lessee, Agro-Dealer, Admin
    """
    
    ROLE_CHOICES = [
        ('OWNER', 'Farm Owner'),
        ('LESSEE', 'Lessee'),
        ('DEALER', 'Agro-Dealer'),
        ('ADMIN', 'Administrator'),
    ]
    
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    county = models.CharField(max_length=50, blank=True, null=True)
    id_number = models.CharField(max_length=20, blank=True, null=True, unique=True)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        
    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"
    
    @property
    def name(self):
        return f"{self.first_name} {self.last_name}".strip() or self.username
