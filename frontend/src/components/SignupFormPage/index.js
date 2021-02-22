import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signup } from "../../store/session";
import { Redirect, NavLink } from "react-router-dom";
import "./Signup.css";

const SignupFormPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      setErrors([]);
      return dispatch(signup({ username, email, password })).catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
    }
    return setErrors([
      "Confirm password field must be the same as the password field.",
    ]);
  };

  return (
    <div className="logout-div">
      <form className="logout-form" onSubmit={handleSubmit}>
        <div className="inputbox">
          <h2>Signup</h2>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            <input
              placeholder="Username:"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Ex: john@Doe.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Password:"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Confirm Password:"
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </label>
          <button type="submit">Register</button>
        </div>
        <NavLink to="/login" style={{ padding: "20px" }}>
          Have an account?
        </NavLink>
      </form>
    </div>
  );
};

export default SignupFormPage;
