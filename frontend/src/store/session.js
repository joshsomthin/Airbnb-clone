import { csrfFetch } from "./csrf";

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const TOGGLE_LOGIN = "session/TOGGLE_LOGIN";

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const deleteSession = () => ({
  type: REMOVE_USER,
});

const toggleLogin = (func) => ({
  type: TOGGLE_LOGIN,
  func,
});

export const addLoginFunc = (func) => async (dispatch) => {
  dispatch(toggleLogin(func));
  return func;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  if (!response.ok) throw response;
  const data = await response.json();
  dispatch(deleteSession());
  return data;
};

export const login = ({ credential, password }) => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ credential: credential, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw response;
  const data = await response.json();

  dispatch(setUser(data.user));
  return data;
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = ({
  username,
  email,
  firstName,
  lastName,
  password,
  profilePic,
}) => async (dispatch) => {
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      firstName,
      lastName,
      password,
      profilePic,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw response;
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const initialState = {
  user: null,
  func: null,
};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case TOGGLE_LOGIN:
      state.func = { 0: action.func };
      console.log(action.func(true));
      return state;
    default:
      return state;
  }
};

export default sessionReducer;
