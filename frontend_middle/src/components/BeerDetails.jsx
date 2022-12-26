/* eslint-disable react/prop-types */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@mui/material';
import BeerCard from './BeerCard';
import allActions from '../actions';

function BeerDetails(props) {
  const willMount = React.useRef(true);
  const beerDetails = useSelector((state) => state.beerDetails);
  const dispatch = useDispatch();
  const loadDataOnlyOnce = () => {
    dispatch(allActions.beerDetailsAction.beerDetails(props.id));
  };
  React.useEffect(() => {
    if (willMount.current) {
      loadDataOnlyOnce();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /*
            Main Component Render
        */
  return beerDetails.beer && !beerDetails.loading ? (
    <BeerCard
      id={beerDetails.beer.id}
      name={beerDetails.beer.name}
      volume={beerDetails.beer.volume}
      image={beerDetails.beer.image}
    >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Description
      </Typography>
      {beerDetails.beer.description ? (
        <Typography variant="h5" component="div">
          {beerDetails.beer.description}
        </Typography>
      ) : (
        <Skeleton variant="rectangular" height={30} sx={{ marginTop: '4px' }} />
      )}
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Ingredients
      </Typography>

      {beerDetails.beer.ingredients.yeast.length ? (
        <Typography variant="body2">
          {beerDetails.beer.ingredients.yeast}
        </Typography>
      ) : (
        <Skeleton variant="rectangular" height={30} sx={{ marginTop: '4px' }} />
      )}
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        BrewersTips
      </Typography>
      {beerDetails.beer.brewers_tips ? (
        <Typography variant="body2">{beerDetails.beer.brewers_tips}</Typography>
      ) : (
        <Skeleton variant="rectangular" height={30} sx={{ marginTop: '4px' }} />
      )}
    </BeerCard>
  ) : (
    'loading'
  );
}

BeerDetails.prototype = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.string,
  brewersTips: PropTypes.string,
  more: PropTypes.string,
  volume: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BeerDetails;
