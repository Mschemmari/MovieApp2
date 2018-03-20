import React, { Component } from 'react';
import MovieBox from './movieBox/movieBox.js';

var  movies  =  [ {
name :   "Thor Ragnarok",
viewed :   true,  },
{
name :   "Back to the Future", viewed :   true,
 }, {
name :   "Robocop",
viewed :   false,  },
];

const viewed = movies.filter(movie =>{
  return movie.viewed === true
})

class ViewedItems extends Component {

  render() {
    return (
      <div className="row">
        {viewed.map( (movie, i) =>(
          <MovieBox key={i} title={movie.name}/>
        ))}
      </div>
    );
  }
}

export default ViewedItems
