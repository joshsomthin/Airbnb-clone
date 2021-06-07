import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { closeModal } from "../../store/modal";
import LoginForm from "./LoginForm";

function LoginFormModal() {
  const dispatch = useDispatch();
  const showLoginModal = useSelector((state) => state.modal?.modal);

  const closethis = async () => {
    await dispatch(closeModal());
  };
  return (
    <>
      {showLoginModal === "Login" && (
        <Modal onClose={closethis}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
