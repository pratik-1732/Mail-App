// MailConfiguration.jsx
import React, { useState } from "react";
import api from "../services/api";

const MailConfiguration = () => {
  const [smtpDetails, setSmtpDetails] = useState({
    host: "",
    port: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSmtpDetails({ ...smtpDetails, [name]: value });
  };

  const handleSaveConfig = async () => {
    try {
      await api.post("/users", smtpDetails);
      alert("SMTP details saved successfully!");
    } catch (error) {
      alert("Failed to save SMTP details.");
    }
  };

  return (
    <div>
      <h2>Mail Configuration</h2>
      <form>
        <label>
          Host:
          <input
            type="text"
            name="host"
            value={smtpDetails.host}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Port:
          <input
            type="text"
            name="port"
            value={smtpDetails.port}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={smtpDetails.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={smtpDetails.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSaveConfig}>
          Save Configuration
        </button>
      </form>
    </div>
  );
};

export default MailConfiguration;
