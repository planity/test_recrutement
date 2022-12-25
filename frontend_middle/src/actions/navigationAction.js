import mTypes from '../types';

const openHomePage = () => ({
  type: mTypes.OPEN_HOME_PAGE,
});

const openOrderPage = () => ({
  type: mTypes.OPEN_ORDER_PAGE,
});
const openDetailsPage = (id) => ({
  type: mTypes.OPEN_DETAILS_PAPGE,
  id,
});

export default {
  openHomePage,
  openOrderPage,
  openDetailsPage,
};
