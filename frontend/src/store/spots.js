import { csrfFetch } from "./csrf";
const GET_SPOTS = "spots/GET_SPOTS";
const POST_RESERVATION = "spots/reserveSpot";

const getSpots = (spot) => ({
  type: GET_SPOTS,
  spot,
});

const reserveSpot = (dates) => ({
  type: POST_RESERVATION,
  dates,
});

export const spots = ({ spotId }) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`);
  if (!response.ok) throw response;
  const data = await response.json();
  dispatch(getSpots(data));
  return data;
};

export const reservations = ({
  spotId,
  userId,
  price,
  body,
  startDate,
  endDate,
}) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reserve`, {
    method: "POST",
    body: JSON.stringify({ spotId, userId, price, body, startDate, endDate }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw response;
  const data = await response.json();
  dispatch(reserveSpot(data));
  return data;
};

const initialState = {
  spot: null,
};

export const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOTS:
      newState = Object.assign({}, state);
      newState.spot = action.spot;
      return newState;
    case POST_RESERVATION:
      newState = Object.assign({}, state);
      newState.reservations = action.dates;
    default:
      return state;
  }
};

export default spotReducer;
