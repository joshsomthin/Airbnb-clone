import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

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
