/* eslint-disable default-param-last */
/* eslint-disable space-in-parens */
import mTypes from '../types';

const initialState = {
  loading: false,
  beers: [],
  error: null,
  page: 1,
  perPage: 24,
};

const beers = (state = initialState, action) => {
  switch (action.type) {
    case mTypes.GET_BEER_STARTED:
      return {
        ...state,
        loading: true,
      };
    case mTypes.GET_BEER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        beers: [...state.beers, ...action.payload],
      };
    case mTypes.GET_BEER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default beers;
