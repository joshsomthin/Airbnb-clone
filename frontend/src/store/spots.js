import { csrfFetch } from "./csrf";
const GET_SPOTS = "spots/GET_SPOTS";

const getSpots = (spot) => ({
  type: GET_SPOTS,
  spot,
});

export const spots = ({ spotId }) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`);
  if (!response.ok) throw response;
  const data = await response.json();
  dispatch(getSpots(data));
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
    default:
      return state;
  }
};

export default spotReducer;
