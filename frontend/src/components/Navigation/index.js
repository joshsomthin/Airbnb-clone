import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
<<<<<<< HEAD
import LoginFormModal from "../LoginFormModal";
=======
>>>>>>> main
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

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
