import React, { useEffect } from 'react';
import ArtistCarousel from './artistCarousel/ArtistCarousel';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArtistsChart = (props) => {
  let { charts, artists } = props;

  useEffect(() => {
		props.getChart();
  }, []);

  if (charts.length === 0) {
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    )
  }

  return (
    <>
      <Row>
        <Col lg='7'>
          <ResponsiveContainer width='100%' height={450}>
            <BarChart layout='vertical' width={900} height={500} data={charts}
              margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis type='number' />
              <YAxis type='category' dataKey='name' />
              <Tooltip />
              <Legend />
              <Bar dataKey='listeners' fill='#8884d8' />
            </BarChart>
          </ResponsiveContainer>
        </Col>
        
        <Col lg='5'>
          <ArtistCarousel artists={artists} artistsImages={props.artistsImages} />
        </Col>
      </Row>
    </>
  );
}

export default ArtistsChart;