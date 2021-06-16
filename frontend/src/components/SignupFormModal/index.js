import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import { closeModal } from "../../store/modal";

function SignupFormModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal?.modal);

  const closethis = async () => {
    await dispatch(closeModal());
  };

  return (
    <>
      {modal === "Sign Up" && (
        <Modal onClose={closethis}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
