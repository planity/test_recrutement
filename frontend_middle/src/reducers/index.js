import { combineReducers } from 'redux';
import navigation from './navigationReducer';
import beers from './beerReducer';
import beerDetails from './beerDetailsReducer';

const rootReducer = combineReducers({
  navigation,
  beers,
  beerDetails,
});

export default rootReducer;
