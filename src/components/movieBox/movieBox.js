import React from 'react';
import Img from './image.js';
import AñadirALista from './AñadirALista.js';


const MovieBox = ({src, title})=>(
  <article className="col-md-6">
    <div className="list-item">
        <Img src={src}/>
        <div className="list-item-body">
            <h3 className="list-item-title">{title}</h3>
            <div className="list-item-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!</p>
            </div>
            <AñadirALista />
        </div>
    </div>
  </article>
)

export default MovieBox;
