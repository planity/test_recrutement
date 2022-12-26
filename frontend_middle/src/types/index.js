import navigationTypes from './navigationTypes';
import beerDetailTypes from './beerDetailsTypes';
import beerTypes from './beerTypes';
import beerOrder from './beerOrderTypes';

const allTypes = {
  ...navigationTypes,
  ...beerTypes,
  ...beerDetailTypes,
  ...beerOrder,
};
export default allTypes;
