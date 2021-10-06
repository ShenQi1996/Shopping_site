import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LS_FORM from "../session/ls_form";

const Modal = props => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.ui.modal.modal);
  let modalForm;
  const handleModal = e => {
    e.preventDefault();
    dispatch(closeModal());
  };

  switch (modal) {
    case "Sign In":
      modalForm = (
        <div>
          <button onClick={handleModal}>X</button>
          <LS_FORM form="Sign In" />
        </div>
      );
      break;
    case "Sign Up":
      modalForm = (
        <div>
          <button onClick={handleModal}>X</button>
          <LS_FORM form="Sign Up" />
        </div>
      );
      break;
    default:
      return null;
  }

  return <div>{modalForm}</div>;
};

export default Modal;
