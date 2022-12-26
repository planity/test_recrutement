/* eslint-disable default-param-last */
/* eslint-disable space-in-parens */
import mTypes from '../types';

const initState = {
  pageName: 'Home',
  id: null,
};
const navigation = (state = initState, action) => {
  switch (action.type) {
    case mTypes.OPEN_HOME_PAGE:
      return initState;
    case mTypes.OPEN_ORDER_PAGE:
      return { ...initState, pageName: 'Order' };
    case mTypes.OPEN_DETAILS_PAPGE:
      return {
        ...initState,
        pageName: 'Details',
        id: action.id,
      };
    default:
      return state;
  }
};

export default navigation;
