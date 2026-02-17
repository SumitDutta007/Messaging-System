# Messaging System - Quick Start Script for Frontend
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Messaging System - Frontend Setup" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to frontend directory
$frontendPath = "c:\Users\Sumit Dutta\OneDrive\Desktop\New folder\messaging-system\frontend"
Set-Location $frontendPath

Write-Host "Step 1: Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
npm install

Write-Host ""
Write-Host "================================================" -ForegroundColor Green
Write-Host "   Frontend Setup Complete!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""
Write-Host "To start the frontend server, run:" -ForegroundColor Cyan
Write-Host "npm start" -ForegroundColor White
Write-Host ""
Write-Host "The application will open at http://localhost:3000" -ForegroundColor Green
Write-Host ""
