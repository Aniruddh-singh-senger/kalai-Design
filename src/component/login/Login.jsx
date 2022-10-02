import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="loginInfo">
          <p>Welcome to SK Algo Tradeon</p>
          <div className="loginform">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
