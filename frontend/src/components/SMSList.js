import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { smsAPI } from "../services/api";
import "./EmailList.css";

const SMSList = () => {
  const [smsList, setSmsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSMS = async () => {
    try {
      const response = await smsAPI.getAll();
      setSmsList(response.data.results || response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching SMS:", error);
      toast.error("Failed to fetch SMS");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSMS();
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
    return <div className="loading">Loading SMS...</div>;
  }

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>SMS Records</h2>
        <button className="refresh-btn" onClick={fetchSMS}>
          🔄 Refresh
        </button>
      </div>

      {smsList.length === 0 ? (
        <div className="empty-state">
          <p>No SMS records found. Send your first SMS using the form below!</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Mobile Number</th>
                <th>Message Sent</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {smsList.map((sms, index) => (
                <tr key={sms.id}>
                  <td>{index + 1}</td>
                  <td>{sms.mobile_number}</td>
                  <td className="message-cell">{sms.message}</td>
                  <td>{formatDate(sms.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SMSList;
