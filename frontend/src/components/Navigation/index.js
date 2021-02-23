import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionState = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionState) {
    sessionLinks = <ProfileButton user={sessionState} />;
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
            <>{isLoaded && sessionLinks}</>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
