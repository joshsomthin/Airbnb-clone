import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";
import Profile from "./Profile";
function Navigation({ isLoaded }) {
  const sessionState = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionState) {
    sessionLinks = <ProfileButton user={sessionState} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav className="navbar">
      <div className="div-container">
        <div className="icon-div">
          <Link to="/">
            <i className="fab fa-airbnb"></i>
            hosthouse
          </Link>
        </div>
        <div className="search-bar">
          <input placeholder="Start your search" />
          <NavLink to="/search">
            <div>
              <i className="fas fa-search-location"></i>
            </div>
          </NavLink>
        </div>
        <div
          style={{
            width: "247px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Profile>
            {sessionState ? (
              <>
                <ProfileButton />
              </>
            ) : (
              <>{isLoaded && sessionLinks}</>
            )}
          </Profile>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
