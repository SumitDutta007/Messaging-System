"""
Django Management Command: Create Default Superuser
Usage: python manage.py create_default_superuser
"""

from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()


class Command(BaseCommand):
    help = 'Create default superuser if it does not exist'

    def handle(self, *args, **options):
        username = 'admin'
        email = 'admin@messaging.com'
        password = 'Admin@2026'

        if User.objects.filter(username=username).exists():
            self.stdout.write(
                self.style.WARNING(f'✅ Superuser "{username}" already exists!')
            )
        else:
            try:
                User.objects.create_superuser(
                    username=username,
                    email=email,
                    password=password
                )
                self.stdout.write(
                    self.style.SUCCESS(f'✅ Superuser "{username}" created successfully!')
                )
                self.stdout.write(f'   Email: {email}')
                self.stdout.write(f'   Password: {password}')
            except Exception as e:
                self.stdout.write(
                    self.style.ERROR(f'❌ Error creating superuser: {e}')
                )
