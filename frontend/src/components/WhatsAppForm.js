import PropTypes from "prop-types";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { whatsappAPI } from "../services/api";
import "./Forms.css";

const WhatsAppForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    mobile_number: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    // Validate mobile number format (basic international format)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(formData.mobile_number)) {
      toast.error("Please enter a valid mobile number");
      return false;
    }

    // Validate message length
    if (formData.message.length > 1000) {
      toast.error("Message must be less than 1000 characters");
      return false;
    }

    if (formData.message.length < 1) {
      toast.error("Message cannot be empty");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // No trimming during typing - we'll trim on submit
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.mobile_number || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    try {
      // Trim values before submitting
      const trimmedData = {
        mobile_number: formData.mobile_number.trim(),
        message: formData.message.trim(),
      };
      
      await whatsappAPI.create(trimmedData);
      toast.success("WhatsApp record created successfully!");
      setFormData({ mobile_number: "", message: "" });
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error creating WhatsApp:", error);

      // Enhanced error handling
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("Invalid data. Please check your inputs.");
        } else if (error.response.status === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("Failed to create WhatsApp record");
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
      <h3>💬 Send WhatsApp</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mobile_number">Mobile Number *</label>
          <input
            type="tel"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
            placeholder="+1234567890"
            maxLength={15}
            required
            aria-required="true"
            aria-label="Mobile number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your WhatsApp message here..."
            rows="4"
            maxLength={1000}
            required
            aria-required="true"
            aria-label="WhatsApp message"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? "Sending..." : "Send WhatsApp"}
        </button>
      </form>
    </div>
  );
};

WhatsAppForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default WhatsAppForm;
