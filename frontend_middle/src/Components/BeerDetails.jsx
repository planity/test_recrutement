import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import BeerCard from './BeerCard';
import { Skeleton } from '@mui/material';

const BeerDetails = (props) => {

    /* 
        Main Component Render
    */
    return (

        <BeerCard id={props.id} name={props.name} volume={props.volume} image={props.image} >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Description
            </Typography>
            {props.description ?
                <Typography variant="h5" component="div">
                    {props.description}
                </Typography>
                : (<Skeleton variant="rectangular" height={30} sx={{ marginTop: "4px" }} />)}
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Ingredients
            </Typography>

            {props.ingredients ?
                <Typography variant="body2">
                    {props.ingredients}
                </Typography>
                : (<Skeleton variant="rectangular" height={30} sx={{ marginTop: "4px" }} />)}
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                BrewersTips
            </Typography>
            {props.brewersTips ?
                <Typography variant="body2">
                    {props.brewersTips}
                </Typography>
                : (<Skeleton variant="rectangular" height={30} sx={{ marginTop: "4px" }} />)}
        </BeerCard>
    )


}


BeerDetails.prototype = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.string,
    brewersTips: PropTypes.string,
    more: PropTypes.string,
    volume: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default BeerDetails

