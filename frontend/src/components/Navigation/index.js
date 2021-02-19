import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import ProfileButton from "./ProfileButton";

function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionState = useSelector((state) => state.session.user);

  const onLogoutClick = async () => {
    let logingOut = await dispatch(logout());
    if (logingOut) {
      history.push(`/`);
    }
  };
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        {sessionState ? (
          <>
            <Link to="/logout" onClick={onLogoutClick}>
              Logout
            </Link>
            <ProfileButton />
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
