import PropTypes from "prop-types";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { emailAPI } from "../services/api";
import "./Forms.css";

const EmailForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email_to: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Sanitize input to prevent XSS
    const sanitizedValue = value.trim();

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  const validateForm = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email_to || !emailRegex.test(formData.email_to)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Validate field lengths
    if (formData.subject && formData.subject.length > 500) {
      toast.error("Subject must be less than 500 characters");
      return false;
    }

    if (formData.message && formData.message.length > 5000) {
      toast.error("Message must be less than 5000 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    try {
      await emailAPI.create(formData);
      toast.success("Email record created successfully!");
      setFormData({ email_to: "", subject: "", message: "" });
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error creating email:", error);

      // Better error messages
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          toast.error("Invalid data. Please check your inputs.");
        } else if (status === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("Failed to create email record");
        }
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h3>📧 Send Email</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email_to">Email Address *</label>
          <input
            type="email"
            id="email_to"
            name="email_to"
            value={formData.email_to}
            onChange={handleChange}
            placeholder="recipient@example.com"
            required
            maxLength={255}
            aria-required="true"
            aria-label="Recipient email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Email subject"
            maxLength={500}
            aria-label="Email subject"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message here..."
            rows="4"
            maxLength={5000}
            aria-label="Email message"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
};

EmailForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default EmailForm;
