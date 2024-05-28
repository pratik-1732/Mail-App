import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MailConfigPage from "./pages/MailConfigPage";
import SendMailPage from "./pages/SendMailPage";
import SentEmailsPage from "./pages/SentEmailsPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <Header />
        {loggedInUser ? (
          <div className="main">
            <SideMenu />
            <div className="content">
              <Routes>
                <Route path="/mail-config" element={<MailConfigPage />} />
                <Route path="/send-mail" element={<SendMailPage />} />
                <Route path="/sent-emails" element={<SentEmailsPage />} />
                <Route path="*" element={<Navigate to="/send-mail" />} />
              </Routes>
            </div>
          </div>
        ) : (
          <LoginPage setLoggedInUser={setLoggedInUser} />
        )}
      </div>
    </Router>
  );
}

export default App;
