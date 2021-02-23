import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/session";

export default function ProfileButton() {
  const sessionState = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
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
      <button onClick={openMenu}>
        <i className="fas fa-user-circle"></i>
      </button>
      {showMenu ? (
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
    </>
  );
}
