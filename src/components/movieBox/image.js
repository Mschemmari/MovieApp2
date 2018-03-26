import React from 'react';
import PropTypes from 'prop-types';

const Img = ({src})=>(
  <div className="list-item-img">
      <img src={src} alt="Movie Image" className="img-fluid"/>
  </div>
)

Img.defaultProps = {
  src: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg'
}
Img.propTypes = {
  src: PropTypes.string.isRequired
}


export default Img;
