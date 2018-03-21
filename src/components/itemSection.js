import React from 'react';
import PropTypes from 'prop-types';
import Img from './movieBox/image.js';





const ItemSection = ({movieTitle, movieDate, linkToMovie, src})=>(
    <article className="col-md-2">
        <a href={linkToMovie} className="grid-item">
            <Img src={src}/>
            <span className="grid-item-body">
                <span className="grid-item-title">{movieTitle}</span>
                <span className="grid-item-date">{movieDate}</span>
            </span>
        </a>
    </article>
)

ItemSection.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieDate: PropTypes.string.isRequired,
  linkToMovie: PropTypes.string.isRequired
};

ItemSection.defaultProps = {
  movieDate: '0/00/00',
  linkToMovie: '#'
};
export default ItemSection;
