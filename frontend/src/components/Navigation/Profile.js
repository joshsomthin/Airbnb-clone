import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Profile.css";

const Profile = () => {
  const sessionState = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogoutClick = async () => {
    let logingOut = await dispatch(logout());
    if (logingOut) {
      history.push(`/`);
    }
  };
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu, showLoginModal, showSignupModal]);

  return (
    <>
      {showLoginModal ? <LoginFormModal /> : ""}
      {showSignupModal ? <SignupFormModal /> : ""}
      <a className="icon-a" onClick={openMenu}>
        <div className="icon-container">
          <div className="user-icon bars">
            <i class="fas fa-bars"></i>
          </div>
          <div className="user-icon">
            <i class="fas fa-user-circle"></i>
          </div>
        </div>
      </a>
      {showMenu && sessionState ? (
        <ul>
          <li>{sessionState.username}</li>
          <li>{sessionState.email}</li>
          <li>
            <Link to="/logout" onClick={onLogoutClick}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
      {showMenu && !sessionState ? (
        <ul>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setShowLoginModal(true);
            }}
          >
            Login
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setShowSignupModal(true);
            }}
          >
            Sign Up
          </a>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
