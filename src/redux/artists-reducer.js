import { artistsApi } from "../api/artistsApi";

const GET_CHARTS = 'LASTFM-API/ARTISTS-REDUCER/GET_CHARTS';
const GET_ARTISTS = 'LASTFM-API/ARTISTS-REDUCER/GET_ARTISTS';

const initialState = {
  charts: [],
  artists: []
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARTS: {
      return {
        ...state,
        charts: action.charts
      }
    }
    case GET_ARTISTS: {
      return {
        ...state,
        artists: action.artists
      }
    }
    default: return state;
  }
};

const updateChart = (charts) => ({ type: GET_CHARTS, charts });
const getArtists = (artists) => ({ type: GET_ARTISTS, artists });

// Получаем топ исполнителей, затем получаем информацию отдельно по каждому
// исполнителю, вошедшему в топ. Диспатчим всё это в стейт.
export const getChart = () => async (dispatch) => {
  const charts = await artistsApi.getChart();
  const artists = await Promise.all(charts.map(arist => {
    return artistsApi.getArtistsFromChart(arist.name)
  }));

  dispatch(updateChart(charts));
  dispatch(getArtists(artists));
};

export default artistsReducer;