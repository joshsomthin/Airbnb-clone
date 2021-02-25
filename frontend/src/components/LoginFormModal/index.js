import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import { addLoginFunc } from "../../store/session";
import { useSelector, useDispatch } from "react-redux";

function LoginFormModal({ truthy = false }) {
  const [showLoginModal, setShowLoginModal] = useState(truthy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addLoginFunc(setShowLoginModal));
  }, []);

  return (
    <>
      <button onClick={() => setShowLoginModal(true)}>Log In</button>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
