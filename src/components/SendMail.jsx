// SendMail.jsx
import React, { useState } from "react";
import api from "../services/api";

const SendMail = () => {
  const [emailData, setEmailData] = useState({
    recipients: "",
    subject: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleSendMail = async () => {
    try {
      const emailPayload = {
        ...emailData,
        recipients: emailData.recipients.split(","), // Convert recipients string to array
      };
      await api.post("/emails", emailPayload);
      alert("Email sent successfully!");
      setEmailData({ recipients: "", subject: "", body: "" });
    } catch (error) {
      alert("Failed to send email.");
    }
  };

  return (
    <div>
      <h2>Send Mail</h2>
      <form>
        <label>
          Recipients (comma separated):
          <input
            type="text"
            name="recipients"
            value={emailData.recipients}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={emailData.subject}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Body:
          <textarea
            name="body"
            value={emailData.body}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <button type="button" onClick={handleSendMail}>
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
