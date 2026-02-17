from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmailViewSet, SMSViewSet, WhatsAppViewSet

router = DefaultRouter()
router.register(r'emails', EmailViewSet, basename='email')
router.register(r'sms', SMSViewSet, basename='sms')
router.register(r'whatsapp', WhatsAppViewSet, basename='whatsapp')

urlpatterns = [
    path('', include(router.urls)),
]
