// SideMenu.jsx
import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside className="side-menu">
      <nav>
        <ul>
          <li>
            <Link to="/mail-config">Mail Configuration</Link>
          </li>
          <li>
            <Link to="/send-mail">Send Mail</Link>
          </li>
          <li>
            <Link to="/sent-emails">Sent Emails</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
