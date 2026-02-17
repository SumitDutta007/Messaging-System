import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { whatsappAPI } from "../services/api";
import "./EmailList.css";

const WhatsAppList = () => {
  const [whatsappList, setWhatsappList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWhatsApp = async () => {
    try {
      const response = await whatsappAPI.getAll();
      setWhatsappList(response.data.results || response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching WhatsApp:", error);
      toast.error("Failed to fetch WhatsApp messages");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWhatsApp();
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
    return <div className="loading">Loading WhatsApp messages...</div>;
  }

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>WhatsApp Records</h2>
        <button className="refresh-btn" onClick={fetchWhatsApp}>
          🔄 Refresh
        </button>
      </div>

      {whatsappList.length === 0 ? (
        <div className="empty-state">
          <p>
            No WhatsApp records found. Send your first WhatsApp message using
            the form below!
          </p>
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
              {whatsappList.map((whatsapp, index) => (
                <tr key={whatsapp.id}>
                  <td>{index + 1}</td>
                  <td>{whatsapp.mobile_number}</td>
                  <td className="message-cell">{whatsapp.message}</td>
                  <td>{formatDate(whatsapp.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WhatsAppList;
