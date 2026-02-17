import axios from "axios";

// Use environment variable with fallback
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 second timeout
});

// Add request interceptor for error handling
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here in the future
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error("Network Error: No response from server");
    } else {
      // Error in request setup
      console.error("Request Error:", error.message);
    }
    return Promise.reject(error);
  },
);

// Email API
export const emailAPI = {
  getAll: () => api.get("/emails/"),
  create: (data) => api.post("/emails/", data),
  delete: (id) => api.delete(`/emails/${id}/`),
};

// SMS API
export const smsAPI = {
  getAll: () => api.get("/sms/"),
  create: (data) => api.post("/sms/", data),
  delete: (id) => api.delete(`/sms/${id}/`),
};

// WhatsApp API
export const whatsappAPI = {
  getAll: () => api.get("/whatsapp/"),
  create: (data) => api.post("/whatsapp/", data),
  delete: (id) => api.delete(`/whatsapp/${id}/`),
};

export default api;
