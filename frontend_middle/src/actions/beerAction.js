import axios from 'axios';
import mTypes from '../types';

const getBeersSuccess = (beer, page) => ({
  type: mTypes.GET_BEER_SUCCESS,
  payload: beer,
  page,
});

const getBeersStarted = () => ({
  type: mTypes.GET_BEER_STARTED,
});

const getBeersFailure = (error) => ({
  type: mTypes.GET_BEER_FAILURE,
  payload: {
    error,
  },
});

const getBeer =
  (page = 1, perPage = 24) =>
  (dispatch) => {
    dispatch(getBeersStarted());
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
      .then((res) => {
        dispatch(getBeersSuccess(res.data, page));
      })
      .catch((err) => {
        dispatch(getBeersFailure(err.message));
      });
  };

export default {
  getBeer,
};
