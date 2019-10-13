import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChart } from './../../redux/artists-reducer';

import LocalNav from '../common/LocalNav';
import ArtistsChart from './artistsChart/ArtistChart';

const Artists = (props) => {
  return (
    <>
      <LocalNav />
      <Switch>
        <Route
          exact path='/artists/charts'
          render={() => <ArtistsChart {...props} /> }
        />
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    charts: state.artists.charts
  }
}

export default connect(mapStateToProps, {
  getChart
})(Artists);