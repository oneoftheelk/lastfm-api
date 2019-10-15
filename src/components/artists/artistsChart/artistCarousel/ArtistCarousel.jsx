import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ArtistCarousel = (props) => {
  const { artists, artistsImages } = props;
  debugger

  return (
    <Carousel interval={0}>
      { artists.map(artist => {
        const artistImage = artistsImages
          .find(img => artist.name === img.name) || {image: '', name: ''};

        return (
          <Carousel.Item>
            <Image src={artistImage.image} alt={artistImage.name} className='img-fluid w-100' rounded />
            <Carousel.Caption>
              <h3>{artistImage.name}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          )}
        )
      }
    </Carousel>
  );
}

export default ArtistCarousel;