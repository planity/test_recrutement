import { combineReducers } from 'redux';
import navigation from './navigationReducer';
import beers from './beerReducer';

const rootReducer = combineReducers({
  navigation,
  beers,
});

export default rootReducer;
