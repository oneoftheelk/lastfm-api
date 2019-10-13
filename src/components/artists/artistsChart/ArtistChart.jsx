import React, { useEffect } from 'react';

const ArtistsChart = (props) => {
  debugger
	useEffect(() => {
		props.getChart();
  }, [props.charts]);
  
  const { artists } = props.charts.artist;

  return (
    <>
      { artists && artists.map((artist) => {
        return (
          <div>
            {`Artist: ${artist.name}, Listeners: ${artist.listeners}`}
          </div>
        )
      })}
    </>
  );
}

export default ArtistsChart;