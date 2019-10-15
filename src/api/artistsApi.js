import axios from 'axios';

const LASTFM_API_KEY = 'f281eeb860dcbd6965a938f488c79397';
const SPOTIFY_CLIENT_ID = 'BQCyw8zaHlvokrGjHA3Ktn_qEtuEfQ1Uxo4BDrBOJlyqt0vp5o3NChP4noD2pQiU6IIdWvedwSKDkPpEA6zTqUahDDVSbM5J1QuPzQSb1Krm1fR4j2NnvaagFWP7AgUottya6qdOjWdprFW5G-tkvuuzTC8YA6_x-dQoPe_v_42SuU4';

const lastfmInstance = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
});

const spotifyInstance = axios.create({
  baseURL: 'https://api.spotify.com/',
  headers: {
    'Authorization': 'Bearer ' + SPOTIFY_CLIENT_ID
  }
});

export const artistsApi = {
  async getChart() {
    const res = await lastfmInstance.get(`?method=chart.gettopartists&api_key=${LASTFM_API_KEY}&limit=10&format=json`);
    return res.data.artists.artist;
  },
  async getArtistsFromChart(artist) {
    const res = await lastfmInstance.get(`?method=artist.getinfo&artist=${artist}&api_key=${LASTFM_API_KEY}&format=json`);
    return res.data.artist;
  },
  async getArtistsFromSpotify(artist) {
    const res = await spotifyInstance.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`);
    return ({
      name: res.data.artists.items[0].name,
      image: res.data.artists.items[0].images[0].url
    });
  }
}