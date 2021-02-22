import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import "./LoginForm.css";

const LoginFormPage = () => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  const loginDemo = (e) => {
    e.preventDefault();
    return dispatch(login({ credential: "Demo", password: "password" })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const submitLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(login({ credential, password })).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };
  return (
    <div className="login-div">
      <form className="login-form" onSubmit={submitLogin}>
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
        <NavLink to="/signup" style={{ padding: "20px" }}>
          Need an account?
        </NavLink>
      </form>
    </div>
  );
};

export default LoginFormPage;
