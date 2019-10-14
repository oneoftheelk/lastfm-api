import axios from 'axios';

const API_KEY = 'f281eeb860dcbd6965a938f488c79397';

const instance = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
});

export const artistsApi = {
  async getChart() {
    const res = await instance.get(`?method=chart.gettopartists&api_key=${API_KEY}&limit=10&format=json`);
    return res.data.artists.artist;
  },
  async getArtistsFromChart(artist) {
    const res = await instance.get(`?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`);
    return res.data.artist;
  }
}