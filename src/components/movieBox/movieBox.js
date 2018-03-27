import React from 'react';
import PropTypes from 'prop-types';
import Img from './image.js';
import Button from '../button.js';


const MovieBox = ({src, title, overview})=>(
  <article className="col-md-6">
    <div className="list-item">
        <Img src={src}/>
        <div className="list-item-body">
            <h3 className="list-item-title">{title}</h3>
            <div className="list-item-description">
                <p>{overview}</p>
            </div>
            <Button title="Añadir a mi lista"/>
        </div>
    </div>
  </article>
)

MovieBox.propTypes = {
  title: PropTypes.string.isRequired
};


export default MovieBox;
