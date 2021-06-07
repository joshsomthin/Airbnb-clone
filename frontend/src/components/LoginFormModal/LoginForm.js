import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { closeModal, setModal } from "../../store/modal";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(login({ credential, password })).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    return dispatch(closeModal());
  };

  const loginDemo = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(
      login({ credential: "Demo-lition", password: "password" })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    return dispatch(closeModal());
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="inputbox">
        <h2>Login</h2>
        <ul className="errors">
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
        <button className="submit-button" type="submit">
          Log In
        </button>
        <button className="submit-button" type="button" onClick={loginDemo}>
          Demo User
        </button>
      </div>
      <a
        className="modal-switch"
        href=""
        style={{ paddingLeft: "30px" }}
        onClick={(e) => {
          e.preventDefault();
          dispatch(setModal("Sign Up"));
        }}
      >
        Need an account?
      </a>
    </form>
  );
}

export default LoginForm;
