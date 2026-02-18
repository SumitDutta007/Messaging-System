"""
Django Management Command: Create Superuser via Script
Run this from Render's console or locally with production DATABASE_URL
"""

import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'messaging_project.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

# Superuser credentials
username = 'admin'
email = 'admin@messaging.com'
password = 'Admin@2026'

# Check if superuser already exists
if User.objects.filter(username=username).exists():
    print(f"✅ Superuser '{username}' already exists!")
else:
    # Create superuser
    User.objects.create_superuser(
        username=username,
        email=email,
        password=password
    )
    print(f"✅ Superuser '{username}' created successfully!")
    print(f"   Email: {email}")
    print(f"   Password: {password}")
    print(f"\n🔑 Login at: https://your-backend.onrender.com/admin/")
