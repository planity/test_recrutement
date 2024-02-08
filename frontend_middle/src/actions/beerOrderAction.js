import mTypes from '../types';

const addBeerToOrder = (beer) => ({
  type: mTypes.ADD_BEER_ORDER,
  beer,
});

export default {
  addBeerToOrder,
};
