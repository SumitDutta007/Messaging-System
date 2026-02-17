import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { emailAPI } from "../services/api";
import "./EmailList.css";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmails = async () => {
    try {
      const response = await emailAPI.getAll();
      setEmails(response.data.results || response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching emails:", error);
      toast.error("Failed to fetch emails");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return <div className="loading">Loading emails...</div>;
  }

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>Email Records</h2>
        <button className="refresh-btn" onClick={fetchEmails}>
          🔄 Refresh
        </button>
      </div>

      {emails.length === 0 ? (
        <div className="empty-state">
          <p>
            No email records found. Send your first email using the form below!
          </p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Email Sent To</th>
                <th>Subject</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email, index) => (
                <tr key={email.id}>
                  <td>{index + 1}</td>
                  <td>{email.email_to}</td>
                  <td>{email.subject || "No Subject"}</td>
                  <td>{formatDate(email.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmailList;
