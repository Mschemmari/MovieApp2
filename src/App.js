import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MovieBox from './components/movieBox/movieBox.js';
import ItemSection from './components/itemSection.js';
import ViewedItems from './components/ViewedItems.js';


var  movies  =  [ {
name :   "Thor Ragnarok",
viewed :   true,  },
{
name :   "Back to the Future", viewed :   true,
 }, {
name :   "Robocop",
viewed :   false,  },
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main">
          <div className="py-5 bg-light">
            <div className="container">
              <section className="items-section">
                <h5 className="items-section-title">Mi Lista <a href="">Ver todas</a></h5>
                <div className="items-section-body">
                  <div className="row">
                    {movies.map((movie, i) =>(
                    <ItemSection
                    key={i}
                    movieTitle={movie.name}
                    />
                    ))}
                  </div>
                  <ViewedItems/>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

    )
  }
}

export default App;
