import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import { setModal } from "../../store/modal";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Profile.css";

const Profile = () => {
  const sessionState = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const showLoginModal = useSelector((state) => state.modal?.modal);
  const showSignupModal = useSelector((state) => state.modal?.status);
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
  }, [showMenu]);

  return (
    <>
      {showLoginModal ? <LoginFormModal /> : ""}
      {showSignupModal ? <SignupFormModal /> : ""}
      <a className="icon-a" onClick={openMenu}>
        <div className="icon-container">
          <div className="user-icon bars">
            <i className="fas fa-bars"></i>
          </div>
          <div className="user-icon">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </a>

      {showMenu && sessionState ? (
        <div className="user-info">
          <div>{sessionState.username}</div>
          <div>
            <NavLink to={`/trips/${sessionState.id}`}>My Account</NavLink>
          </div>
          <div>
            <NavLink to="/logout" onClick={onLogoutClick}>
              Logout
            </NavLink>
          </div>
        </div>
      ) : (
        ""
      )}
      {showMenu && !sessionState ? (
        <div className="user-info">
          <div>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                dispatch(setModal("Login"));
              }}
            >
              Login
            </a>
          </div>
          <div>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                dispatch(setModal("Sign Up"));
              }}
            >
              Sign Up
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
