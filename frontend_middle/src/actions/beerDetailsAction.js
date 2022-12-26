import axios from 'axios';
import mTypes from '../types';

const BeerDetailsSuccess = (beer) => ({
  type: mTypes.BEER_DETAILS_SUCCESS,
  payload: beer,
});

const BeerDetailsStarted = () => ({
  type: mTypes.BEER_DETAILS_STARTED,
});

const BeerDetailsFailure = (error) => ({
  type: mTypes.BEER_DETAILS_FAILURE,
  payload: {
    error,
  },
});

const beerDetails = (id) => (dispatch) => {
  dispatch(BeerDetailsStarted());
  axios
    .get(`https://api.punkapi.com/v2/beers/${id}`)
    .then((res) => {
      dispatch(BeerDetailsSuccess(res.data[0]));
    })
    .catch((err) => {
      dispatch(BeerDetailsFailure(err.message));
    });
};

export default {
  beerDetails,
};
