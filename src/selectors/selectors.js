import { createSelector } from 'reselect';

export const getArtists = state => state.artists.artists;

export const getSpotifyArtists = state => state.artists.spotifyArtists;

const getCharts = state => state.artists.charts;

export const getChartsSelector = createSelector(
  getCharts,
  charts => charts.map(chart => {
    return ({
      name: chart.name,
      listeners: +chart.listeners,
      playcount: +chart.playcount
    });
  }).sort((a, b) => b.listeners - a.listeners)
);