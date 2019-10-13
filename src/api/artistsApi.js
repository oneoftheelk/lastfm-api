import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
});

export const artistsApi = {
  getChart() {
    return instance.get(`?method=chart.gettopartists&api_key=f281eeb860dcbd6965a938f488c79397&limit=10&format=json`);
  }
}