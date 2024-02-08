/* eslint-disable default-param-last */
/* eslint-disable space-in-parens */
import mTypes from '../types';

const initState = {
  beers: [],
};
const beerOrder = (state = initState, action) => {
  switch (action.type) {
    case mTypes.ADD_BEER_ORDER:
      return {
        ...initState,
        pageName: 'Details',
        beers: [...state.beers, action.beer],
      };
    default:
      return state;
  }
};

export default beerOrder;
