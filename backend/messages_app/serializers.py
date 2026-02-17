from rest_framework import serializers
from .models import Email, SMS, WhatsApp


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = ['id', 'email_to', 'subject', 'message', 'timestamp']
        read_only_fields = ['id', 'timestamp']


class SMSSerializer(serializers.ModelSerializer):
    class Meta:
        model = SMS
        fields = ['id', 'mobile_number', 'message', 'timestamp']
        read_only_fields = ['id', 'timestamp']


class WhatsAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhatsApp
        fields = ['id', 'mobile_number', 'message', 'timestamp']
        read_only_fields = ['id', 'timestamp']
