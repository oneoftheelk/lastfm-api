import { artistsApi } from "../api/artistsApi";

const GET_CHARTS = 'LASTFM-API/ARTISTS-REDUCER/GET_CHARTS';
const GET_ARTISTS = 'LASTFM-API/ARTISTS-REDUCER/GET_ARTISTS';
const GET_SPOTIFY_ARTISTS = 'LASTFM-API/ARTISTS-REDUCER/GET_DEEZER_ARTISTS';

const initialState = {
  charts: [],
  artists: [],
  spotifyArtists: []
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
    case GET_SPOTIFY_ARTISTS: {
      return {
        ...state,
        spotifyArtists: action.spotifyArtists
      }
    }
    default: return state;
  }
};

const updateChart = (charts) => ({ type: GET_CHARTS, charts });
const getArtists = (artists) => ({ type: GET_ARTISTS, artists });
const getSpotifyArtists = (spotifyArtists) => ({ type: GET_SPOTIFY_ARTISTS, spotifyArtists });

export const getChart = () => async (dispatch) => {
  // Получаем топ исполнителей lastfm
  const charts = await artistsApi.getChart();
  dispatch(updateChart(charts));

  // Получаем информацию отдельно по каждому исполнителю, вошедшему в топ
  const artists = await Promise.all(charts.map(arist => {
    return artistsApi.getArtistsFromChart(arist.name)
  }));
  dispatch(getArtists(artists));

  // Подгружаем фотографии исполнителей из spotify
  const spotifyArtists = await Promise.all(artists.map(arist => {
    return artistsApi.getArtistsFromSpotify(arist.name)
  }));
  dispatch(getSpotifyArtists(spotifyArtists));
};

export default artistsReducer;