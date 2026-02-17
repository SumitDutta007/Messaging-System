from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from .models import Email, SMS, WhatsApp
from .serializers import EmailSerializer, SMSSerializer, WhatsAppSerializer
import logging

logger = logging.getLogger(__name__)


class EmailViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Email CRUD operations with proper error handling
    """
    queryset = Email.objects.all()
    serializer_class = EmailSerializer
    
    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            
            logger.info(f"Email record created: {serializer.data.get('id')}")
            
            return Response(
                {
                    'message': 'Email record created successfully',
                    'data': serializer.data
                },
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        except ValidationError as e:
            logger.warning(f"Validation error in email creation: {e}")
            return Response(
                {'error': 'Invalid data provided', 'details': e.detail},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            logger.error(f"Error creating email: {str(e)}")
            return Response(
                {'error': 'Internal server error'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class SMSViewSet(viewsets.ModelViewSet):
    """
    ViewSet for SMS CRUD operations with proper error handling
    """
    queryset = SMS.objects.all()
    serializer_class = SMSSerializer
    
    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            
            logger.info(f"SMS record created: {serializer.data.get('id')}")
            
            return Response(
                {
                    'message': 'SMS record created successfully',
                    'data': serializer.data
                },
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        except ValidationError as e:
            logger.warning(f"Validation error in SMS creation: {e}")
            return Response(
                {'error': 'Invalid data provided', 'details': e.detail},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            logger.error(f"Error creating SMS: {str(e)}")
            return Response(
                {'error': 'Internal server error'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class WhatsAppViewSet(viewsets.ModelViewSet):
    """
    ViewSet for WhatsApp CRUD operations with proper error handling
    """
    queryset = WhatsApp.objects.all()
    serializer_class = WhatsAppSerializer
    
    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            
            logger.info(f"WhatsApp record created: {serializer.data.get('id')}")
            
            return Response(
                {
                    'message': 'WhatsApp record created successfully',
                    'data': serializer.data
                },
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        except ValidationError as e:
            logger.warning(f"Validation error in WhatsApp creation: {e}")
            return Response(
                {'error': 'Invalid data provided', 'details': e.detail},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            logger.error(f"Error creating WhatsApp: {str(e)}")
            return Response(
                {'error': 'Internal server error'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
