import { artistsApi } from "../api/artistsApi";

const GET_CHARTS = 'LASTFM-API/ARTISTS-REDUCER/GET_CHARTS';

const initialState = {
  charts: []
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARTS: {
      return {
        ...state,
        charts: action.artists
      }
    }
    default: return state;
  }
};

const updateChart = (artists) => ({ type: GET_CHARTS, artists });

export const getChart = () => (dispatch) => {
  artistsApi.getChart()
    .then(res => {
      dispatch(updateChart(res.data.artists.artist));
    })
};

export default artistsReducer;