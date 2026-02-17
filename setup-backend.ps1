# Messaging System - Quick Start Script for Backend
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Messaging System - Backend Setup" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to backend directory
$backendPath = "c:\Users\Sumit Dutta\OneDrive\Desktop\New folder\messaging-system\backend"
Set-Location $backendPath

Write-Host "Step 1: Creating virtual environment..." -ForegroundColor Yellow
python -m venv venv

Write-Host "Step 2: Activating virtual environment..." -ForegroundColor Yellow
& ".\venv\Scripts\Activate.ps1"

Write-Host "Step 3: Installing dependencies..." -ForegroundColor Yellow
pip install -r requirements.txt

Write-Host "Step 4: Running migrations..." -ForegroundColor Yellow
python manage.py makemigrations
python manage.py migrate

Write-Host ""
Write-Host "================================================" -ForegroundColor Green
Write-Host "   Backend Setup Complete!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""
Write-Host "To start the backend server, run:" -ForegroundColor Cyan
Write-Host "python manage.py runserver" -ForegroundColor White
Write-Host ""
Write-Host "Optional: Create superuser for admin access:" -ForegroundColor Cyan
Write-Host "python manage.py createsuperuser" -ForegroundColor White
Write-Host ""
