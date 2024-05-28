// SentEmails.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";

const SentEmails = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await api.get("/emails");
        setEmails(response.data);
      } catch (error) {
        alert("Failed to fetch sent emails.");
      }
    };

    fetchEmails();
  }, []);

  return (
    <div>
      <h2>Sent Emails</h2>
      <ul>
        {emails.map((email) => (
          <li key={email._id}>
            <p>
              <strong>To:</strong> {email.recipients.join(", ")}
            </p>
            <p>
              <strong>Subject:</strong> {email.subject}
            </p>
            <p>
              <strong>Body:</strong> {email.body}
            </p>
            <p>
              <strong>Sent At:</strong>{" "}
              {new Date(email.sentAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SentEmails;
