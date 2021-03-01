import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import { addLoginFunc } from "../../store/session";
import { useSelector, useDispatch } from "react-redux";

function LoginFormModal({ name = "Log In", classes }) {
  const [showLoginModal, setShowLoginModal] = useState(true);

  return (
    <>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
