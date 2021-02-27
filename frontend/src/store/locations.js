import { csrfFetch } from "./csrf";
const GET_LOCATIONS = "spots/getLocations";
const GET_SEARCH = "spots/getSearch";

const getLocations = (locations) => ({
  type: GET_LOCATIONS,
  locations,
});

const getSearch = (search) => ({
  type: GET_SEARCH,
  search,
});

export const getSearchLocations = () => async (dispatch) => {
  const response = await csrfFetch("api/spots/search");
  if (!response.ok) throw response();
  const data = await response.json();
  dispatch(getSearch(data));
  return data;
};

export const locationPopulate = () => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/locations`);
  if (!response.ok) throw response;
  const data = await response.json();
  dispatch(getLocations(data));
  return data;
};

const initialState = {
  locations: null,
  search: null,
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
    case GET_SEARCH:
      newState = Object.assign({}, state);
      newState.search = actions.search;
      return newState;
    default:
      return state;
  }
};

export default locationReducer;
