import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import EmailForm from "./components/EmailForm";
import EmailList from "./components/EmailList";
import SMSForm from "./components/SMSForm";
import SMSList from "./components/SMSList";
import WhatsAppForm from "./components/WhatsAppForm";
import WhatsAppList from "./components/WhatsAppList";

function App() {
  const [activeTab, setActiveTab] = useState("email");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleEmailSuccess = () => {
    // Trigger refresh by updating key
    setRefreshKey((prev) => prev + 1);
  };

  const handleSMSSuccess = () => {
    // Trigger refresh by updating key
    setRefreshKey((prev) => prev + 1);
  };

  const handleWhatsAppSuccess = () => {
    // Trigger refresh by updating key
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <header className="app-header">
        <div className="header-content">
          <h1>📨 Messaging System</h1>
          <p>Manage your Email, SMS, and WhatsApp communications</p>
        </div>
      </header>

      <div className="container">
        {/* Tabs Section */}
        <div className="tabs-section">
          <h2 className="section-title">Message Records</h2>
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === "email" ? "active" : ""}`}
              onClick={() => setActiveTab("email")}
            >
              📧 Email
            </button>
            <button
              className={`tab-btn ${activeTab === "sms" ? "active" : ""}`}
              onClick={() => setActiveTab("sms")}
            >
              📱 SMS
            </button>
            <button
              className={`tab-btn ${activeTab === "whatsapp" ? "active" : ""}`}
              onClick={() => setActiveTab("whatsapp")}
            >
              💬 WhatsApp
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "email" && <EmailList key={`email-${refreshKey}`} />}
            {activeTab === "sms" && <SMSList key={`sms-${refreshKey}`} />}
            {activeTab === "whatsapp" && (
              <WhatsAppList key={`whatsapp-${refreshKey}`} />
            )}
          </div>
        </div>

        {/* Forms Section */}
        <div className="forms-section">
          <h2 className="section-title">Send Messages</h2>
          <div className="forms-grid">
            <EmailForm onSuccess={handleEmailSuccess} />
            <SMSForm onSuccess={handleSMSSuccess} />
            <WhatsAppForm onSuccess={handleWhatsAppSuccess} />
          </div>
        </div>
      </div>

      <footer className="app-footer">
        <p>© 2026 Messaging System. Built with React & Django.</p>
      </footer>
    </div>
  );
}

export default App;
