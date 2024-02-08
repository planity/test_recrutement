import { combineReducers } from 'redux';
import navigation from './navigationReducer';
import beers from './beerReducer';
import beerDetails from './beerDetailsReducer';
import beerOrder from './beerOrderReducer';

const rootReducer = combineReducers({
  navigation,
  beers,
  beerDetails,
  beerOrder,
});

export default rootReducer;
