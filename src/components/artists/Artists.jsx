import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChart } from './../../redux/artists-reducer';
import { getChartsSelector, getArtists } from '../../selectors/selectors';

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
    charts: getChartsSelector(state),
    artists: getArtists(state)
  }
}

export default connect(mapStateToProps, {
  getChart
})(Artists);