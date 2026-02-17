from django.contrib import admin
from .models import Email, SMS, WhatsApp


@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ['id', 'email_to', 'subject', 'timestamp']
    list_filter = ['timestamp']
    search_fields = ['email_to', 'subject', 'message']
    readonly_fields = ['timestamp']


@admin.register(SMS)
class SMSAdmin(admin.ModelAdmin):
    list_display = ['id', 'mobile_number', 'message', 'timestamp']
    list_filter = ['timestamp']
    search_fields = ['mobile_number', 'message']
    readonly_fields = ['timestamp']


@admin.register(WhatsApp)
class WhatsAppAdmin(admin.ModelAdmin):
    list_display = ['id', 'mobile_number', 'message', 'timestamp']
    list_filter = ['timestamp']
    search_fields = ['mobile_number', 'message']
    readonly_fields = ['timestamp']
