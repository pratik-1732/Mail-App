import React from "react";
import Login from "../components/Login";

const LoginPage = ({ setLoggedInUser }) => {
  return (
    <div>
      <Login setLoggedInUser={setLoggedInUser} />
    </div>
  );
};

export default LoginPage;
