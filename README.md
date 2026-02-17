# Messaging System - Full Stack Application

A comprehensive messaging management system built with React.js and Django REST Framework. This application allows you to manage Email, SMS, and WhatsApp communications with a clean, modern interface.

## 🚀 Features

- **Multiple Tabs Interface**: Separate tabs for Email, SMS, and WhatsApp records
- **List Views**: Each tab displays records with different columns:
  - Email: Serial number, Email sent to, Subject, Timestamp
  - SMS: Serial number, Mobile number, Message, Timestamp
  - WhatsApp: Serial number, Mobile number, Message, Timestamp
- **Three Separate Forms**:
  - Send Email (with email address, subject, and message fields)
  - Send SMS (with mobile number and message fields)
  - Send WhatsApp (with mobile number and message fields)
- **Database Integration**: All records are saved in SQLite database
- **Real-time Updates**: List views refresh automatically after form submission
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## 🛠️ Tech Stack

### Backend

- Python 3.8+
- Django 4.2.7
- Django REST Framework 3.14.0
- SQLite Database
- CORS Headers for API access

### Frontend

- React.js 18.2.0
- Axios for API calls
- React Toastify for notifications
- Modern CSS with responsive design

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn package manager

## 🔧 Installation & Setup

### Backend Setup

1. **Navigate to the backend directory**:

```powershell
cd "c:\Users\Sumit Dutta\OneDrive\Desktop\New folder\messaging-system\backend"
```

2. **Create a virtual environment**:

```powershell
python -m venv venv
```

3. **Activate the virtual environment**:

```powershell
.\venv\Scripts\Activate
```

4. **Install dependencies**:

```powershell
pip install -r requirements.txt
```

5. **Run database migrations**:

```powershell
python manage.py makemigrations
python manage.py migrate
```

6. **Create a superuser (optional, for admin access)**:

```powershell
python manage.py createsuperuser
```

7. **Start the Django development server**:

```powershell
python manage.py runserver
```

The backend API will be available at `http://localhost:8000/`

### Frontend Setup

1. **Open a new terminal and navigate to the frontend directory**:

```powershell
cd "c:\Users\Sumit Dutta\OneDrive\Desktop\New folder\messaging-system\frontend"
```

2. **Install dependencies**:

```powershell
npm install
```

3. **Start the React development server**:

```powershell
npm start
```

The frontend application will open automatically at `http://localhost:3000/`

## 📱 Usage

### Viewing Records

1. **Select a Tab**: Click on Email, SMS, or WhatsApp tabs to view respective records
2. **Refresh**: Use the refresh button to reload the list with latest data

### Sending Messages

1. **Fill the Form**: Enter the required information in the respective form:
   - **Email Form**: Email address (required), Subject (optional), Message (optional)
   - **SMS Form**: Mobile number (required), Message (required)
   - **WhatsApp Form**: Mobile number (required), Message (required)

2. **Submit**: Click the submit button to create a new record
3. **Confirmation**: You'll see a success notification and the page will refresh to show the new record

## 🎯 API Endpoints

### Email Endpoints

- `GET /api/emails/` - List all emails
- `POST /api/emails/` - Create a new email record
- `GET /api/emails/{id}/` - Get specific email
- `DELETE /api/emails/{id}/` - Delete email

### SMS Endpoints

- `GET /api/sms/` - List all SMS
- `POST /api/sms/` - Create a new SMS record
- `GET /api/sms/{id}/` - Get specific SMS
- `DELETE /api/sms/{id}/` - Delete SMS

### WhatsApp Endpoints

- `GET /api/whatsapp/` - List all WhatsApp messages
- `POST /api/whatsapp/` - Create a new WhatsApp record
- `GET /api/whatsapp/{id}/` - Get specific WhatsApp message
- `DELETE /api/whatsapp/{id}/` - Delete WhatsApp message

## 📂 Project Structure

```
messaging-system/
├── backend/
│   ├── messaging_project/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── messages_app/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── admin.py
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmailList.js
│   │   │   ├── EmailList.css
│   │   │   ├── SMSList.js
│   │   │   ├── WhatsAppList.js
│   │   │   ├── EmailForm.js
│   │   │   ├── SMSForm.js
│   │   │   ├── WhatsAppForm.js
│   │   │   └── Forms.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## 🔐 Admin Panel

Access the Django admin panel at `http://localhost:8000/admin/` to:

- View all records
- Manually add/edit/delete records
- Manage database entries

## 🎨 Features Highlights

- **No Real Messages Sent**: This is a demonstration system - no actual emails, SMS, or WhatsApp messages are sent
- **Database Storage**: All records are stored in SQLite database
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive**: Works on all screen sizes
- **Real-time Notifications**: Toast notifications for all actions
- **Form Validation**: Client-side validation for all forms
- **Error Handling**: Graceful error handling with user-friendly messages

## 🐛 Troubleshooting

### Backend Issues

- **Port 8000 already in use**: Change the port with `python manage.py runserver 8001`
- **Database errors**: Delete `db.sqlite3` and run migrations again
- **CORS errors**: Check that `django-cors-headers` is installed and configured

### Frontend Issues

- **Port 3000 already in use**: The system will prompt to use another port
- **API connection errors**: Ensure the backend is running on port 8000
- **Dependencies issues**: Delete `node_modules` and run `npm install` again

## 📝 Notes for Internship Assignment

This project demonstrates:

- ✅ Full-stack development with React and Django
- ✅ RESTful API design and implementation
- ✅ Database modeling and ORM usage
- ✅ Modern frontend with responsive design
- ✅ Clean code structure and organization
- ✅ Error handling and user feedback
- ✅ Git version control practices

## 🚀 Future Enhancements

Potential improvements that could be added:

- User authentication and authorization
- Pagination for large datasets
- Search and filter functionality
- Export data to CSV/Excel
- Real email/SMS/WhatsApp integration
- Message templates
- Scheduling messages
- Analytics dashboard

## 👨‍💻 Development

This project was built as part of a Full Stack Developer Internship assignment, demonstrating proficiency in:

- React.js for frontend development
- Django & Django REST Framework for backend
- RESTful API design
- Database design and management
- Modern UI/UX principles
- Full-stack integration

## 📄 License

This project is for educational and demonstration purposes.

---

**Built with ❤️ for Full Stack Developer Internship Assignment**
