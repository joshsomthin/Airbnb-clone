import { csrfFetch } from "./csrf";
const GET_LOCATIONS = "spots/getLocations";

const getLocations = (locations) => ({
  type: GET_LOCATIONS,
  locations,
});

export const locationPopulate = () => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/locations`);
  if (!response.ok) throw response;
  const data = await response.json();
  dispatch(getLocations(data));
  return data;
};

export const locationReducer = (state = {}, actions) => {
  let newState;
  switch (actions.type) {
    case GET_LOCATIONS:
      let obj = {};
      actions.locations.forEach((el) => {
        obj[el.spotId] = el;
      });
      newState = Object.assign({}, state);
      newState.locations = obj;
      return newState;
    default:
      return state;
  }
};

export default locationReducer;
