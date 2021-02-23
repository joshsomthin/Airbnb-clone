import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import SignupForm from "../SignupFormModal/SignupForm";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [switchModal, setSwitchModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const loginDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return !switchModal ? (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="inputbox">
        <h2>Login</h2>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="username/email"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={{ margin: "10px" }}>
          Log In
        </button>
        <button type="button" style={{ margin: "10px" }} onClick={loginDemo}>
          Demo User
        </button>
      </div>
      <a
        href=""
        style={{ padding: "30px" }}
        onClick={(e) => {
          e.preventDefault();
          setSwitchModal(true);
        }}
      >
        Need an account?
      </a>
    </form>
  ) : (
    <SignupForm />
  );
}

export default LoginForm;
