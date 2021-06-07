const SET_MODAL = "modal/SET_MODAL";
const SET_MODAL_CLOSED = "modal/SET_MODAL_CLOSED";

const openModal = (modal) => ({
  type: SET_MODAL,
  modal,
});

const closeAllModal = () => ({
  type: SET_MODAL_CLOSED,
});

export const setModal = (modal) => async (dispatch) => {
  console.log("here");
  return dispatch(openModal(modal));
};

export const closeModal = () => async (dispatch) => {
  return dispatch(closeAllModal());
};

export const modalReducer = (state = {}, actions) => {
  let newState;
  switch (actions.type) {
    case SET_MODAL:
      newState = { ...state };
      newState.modal = actions.modal;
      newState.status = true;
      return newState;
    case SET_MODAL_CLOSED:
      newState = { ...state };
      newState.modal = null;
      newState.status = false;
      return newState;
    default:
      return state;
  }
};
export default modalReducer;
