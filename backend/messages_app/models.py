from django.db import models
from django.utils import timezone


class Email(models.Model):
    """Model for storing email records"""
    email_to = models.EmailField(max_length=255)
    subject = models.CharField(max_length=500, blank=True)
    message = models.TextField(blank=True)
    timestamp = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['-timestamp']
        
    def __str__(self):
        return f"Email to {self.email_to} at {self.timestamp}"


class SMS(models.Model):
    """Model for storing SMS records"""
    mobile_number = models.CharField(max_length=20)
    message = models.TextField()
    timestamp = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['-timestamp']
        verbose_name = "SMS"
        verbose_name_plural = "SMS"
        
    def __str__(self):
        return f"SMS to {self.mobile_number} at {self.timestamp}"


class WhatsApp(models.Model):
    """Model for storing WhatsApp records"""
    mobile_number = models.CharField(max_length=20)
    message = models.TextField()
    timestamp = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['-timestamp']
        verbose_name = "WhatsApp Message"
        verbose_name_plural = "WhatsApp Messages"
        
    def __str__(self):
        return f"WhatsApp to {self.mobile_number} at {self.timestamp}"
