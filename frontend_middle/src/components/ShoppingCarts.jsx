import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ShoppingCarts() {
  const willMount = React.useRef(true);
  const { beers } = useSelector((state) => state.beerOrder);
  const dispatch = useDispatch();
  const loadDataOnlyOnce = () => {
    dispatch(allActions.beerAction.getBeer(1, 10));
  };
  React.useEffect(() => {
    if (willMount.current && beers.length === 0) {
      loadDataOnlyOnce();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <List
      sx={{
        width: '100%',
        marginTop: '50px',
        padding: '0 16px 0 16px',
        bgcolor: 'background.paper',
      }}
    >
      {beers.map((beer) => {
        return (
          <React.Fragment key={beer.id}>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    const id = beer.id;
                    dispatch(allActions.navigationAction.openDetailsPage(id));
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={beer.image} />
              </ListItemAvatar>
              <ListItemText primary={beer.name} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
