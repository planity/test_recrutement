import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container, Grid, CircularProgress } from '@mui/material';
import BeerAppBar from './BeerAppBar';
import BeerCard from './BeerCard';
import ShoppingCarts from './ShoppingCarts';
import BeerDetails from './BeerDetails';
import allActions from '../actions';
import InfiniteScroll from 'react-infinite-scroll-component';

function MainContainer() {
  const navigation = useSelector((state) => state.navigation);
  const { beers, page } = useSelector((state) => state.beers);
  const willMount = React.useRef(true);
  const dispatch = useDispatch();
  const loadDataOnlyOnce = () => {
    dispatch(allActions.beerAction.getBeer(1, 24));
  };
  React.useEffect(() => {
    if (willMount.current && beers.length === 0) {
      loadDataOnlyOnce();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /*
    Render The Home Component
  */
  const renderHomeComponent = () => (
    <InfiniteScroll
      dataLength={beers.length}
      pageStart={1}
      next={() => {
        dispatch(allActions.beerAction.getBeer(page + 1, 24));
      }}
      hasMore={true}
      useWindow={true}
      threshold={450}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {beers.map((beer) => (
          <Grid item xs={12} md={6} lg={3} sx={{ marginTop: 3 }} key={beer.id}>
            <BeerCard name={beer.name} id={beer.id} volume={beer.volume} image={beer.image_url} />
          </Grid>
        ))}
        {beers.loading && <CircularProgress />}
      </Grid>
    </InfiniteScroll>
  );
  /*
    Render the Shopping Cart
  */
  const renderShoppingCartComponent = () => <ShoppingCarts />;
  /*
    Render Beer Details
  */
  const renderBeerDetails = (id) => <BeerDetails id={id} />;
  /*
    Render Switch
  */
  const renderSwith = () => {
    switch (navigation.pageName) {
      case 'Home':
        return renderHomeComponent();
      case 'Order':
        return renderShoppingCartComponent();
      case 'Details':
        return renderBeerDetails(navigation.id);
      default:
        return renderHomeComponent();
    }
  };
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <BeerAppBar />
            </Grid>
            <Grid item xs={12}>
              {renderSwith()}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default React.memo(MainContainer);
