/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Skeleton,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions';
import Imagedefault from '../images/default.png';

function BeerCard(props) {
  const dispatch = useDispatch();
  const { beers } = useSelector((state) => state.beerOrder);
  let beerIds = [];
  beerIds = beers.map(({ id }) => id);
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image={props.image && props.image.length ? props.image : Imagedefault}
        sx={{ maxHeight: '300px', maxWidth: '300px', margin: 'auto' }}
      />
      <CardContent>
        {props.name && props.name.length ? (
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        ) : (
          <Skeleton
            variant="rectangular"
            height={30}
            sx={{ marginTop: '4px' }}
          />
        )}
        {props.volume ? (
          <Typography variant="body2" color="text.secondary">
            {`${props.volume.value} ${props.volume.unit}`}
          </Typography>
        ) : (
          <Skeleton
            variant="rectangular"
            height={60}
            sx={{ marginTop: '4px' }}
          />
        )}
        {props.children}
      </CardContent>
      <CardActions>
        {/* TODO We Have to check the list of orders */}
        {beerIds.includes(props.id) ? (
          <Button size="small">Orderd</Button>
        ) : (
          <Button
            size="small"
            onClick={() => {
              const beer = {
                id: props.id,
                image: props.image,
                name: props.name,
              };
              dispatch(allActions.beerOrderAction.addBeerToOrder(beer));
            }}
          >
            Add
          </Button>
        )}

        <Button
          size="small"
          onClick={() => {
            dispatch(allActions.navigationAction.openDetailsPage(props.id));
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
BeerCard.prototype = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.string,
  name: PropTypes.string,
  volume: PropTypes.shape({
    value: PropTypes.number,
    unit: PropTypes.string,
  }),
};

export default BeerCard;
