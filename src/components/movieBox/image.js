import React from 'react';
import PropTypes from 'prop-types';

const Img = ({src})=>(
  <div className="list-item-img">
      <img src={src} alt="Movie Image" className="img-fluid"/>
  </div>
)

Img.defaultProps = {
  src: 'http://via.placeholder.com/180x270'
}
Img.propTypes = {
  src: PropTypes.string.isRequired
}


export default Img;
