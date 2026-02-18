"""
Django Management Command: Create Superuser via Script
Run this from Render's console or locally with production DATABASE_URL
"""

import os
import sys
import django

# Add the project directory to the path
project_root = os.path.dirname(os.path.abspath(__file__))
sys.path.append(project_root)

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'messaging_project.settings')

try:
    django.setup()
except Exception as e:
    print(f"❌ Error setting up Django: {e}")
    sys.exit(1)

from django.contrib.auth import get_user_model

User = get_user_model()

# Superuser credentials
username = 'admin'
email = 'admin@messaging.com'
password = 'Admin@2026'

try:
    # Check if superuser already exists
    if User.objects.filter(username=username).exists():
        print(f"✅ Superuser '{username}' already exists!")
        print(f"   You can login at the /admin/ URL")
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
        print(f"   Login at: /admin/")
except Exception as e:
    print(f"❌ Error creating superuser: {e}")
    print(f"   This is not critical - you can create superuser manually later")
    # Don't exit with error code to avoid failing the build
    sys.exit(0)
