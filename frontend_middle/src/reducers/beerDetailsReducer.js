/* eslint-disable default-param-last */
/* eslint-disable space-in-parens */
import mTypes from '../types';

const initialState = {
  loading: false,
  beer: null,
  error: null,
};

const beerDetails = (state = initialState, action) => {
  switch (action.type) {
    case mTypes.BEER_DETAILS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case mTypes.BEER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        beer: action.payload,
      };
    case mTypes.BEER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default beerDetails;
