import React from 'react';
import Img from './movieBox/image.js';


const ItemSection = ({src, movieTitle, movieDate, linkToMovie})=>(
    <article className="col-md-2">
        <a href={linkToMovie} className="grid-item">
            <Img/>
            <span className="grid-item-body">
                <span className="grid-item-title">{movieTitle}</span>
                <span className="grid-item-date">{movieDate}</span>
            </span>
        </a>
    </article>
)

ItemSection.defaultProps = {
  movieDate: '0/00/00',
  linkToMovie: '#'
};
export default ItemSection;
