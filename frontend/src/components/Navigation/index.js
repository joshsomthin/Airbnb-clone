import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionState = useSelector((state) => state.session.user);

  return (
    <div className="navbar">
      <div className="div-container">
        <div className="icon-div">
          <Link to="/">
            <i className="fab fa-airbnb"></i>
            airbnb
          </Link>
        </div>
        <div className="search-bar">
          <input placeholder="Start your search" />
          <button>
            <i className="fas fa-search-location"></i>
          </button>
        </div>
        <div>
          {sessionState ? (
            <>
              <ProfileButton />
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
