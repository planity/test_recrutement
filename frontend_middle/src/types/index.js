import navigationTypes from './navigationTypes';
import beerDetailTypes from './beerDetailsTypes';
import beerTypes from './beerTypes';

const allTypes = {
  ...navigationTypes,
  ...beerTypes,
  ...beerDetailTypes,
};
export default allTypes;
