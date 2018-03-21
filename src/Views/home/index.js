import React, { Component } from 'react';
import TheMovieDbApi from '../../TheMovieDbApi.js'
import {Link} from 'react-router-dom'
//components
import ItemSection from '../../components/itemSection.js'
import Section from './section.js'



class Home extends Component {
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      movies: [],
      series: []
    };
  }
  componentDidMount() {
    this.api.getPopularMovies().then(res => {
      console.log(res.data.results)
      const movies = res.data.results
      this.setState({
        movies: [...movies, this.state.movies],
      });
    })
    this.api.getPopularSeries().then(res => {
      console.log(res.data.results)
      const series = res.data.results
      this.setState({
        series: [...series, this.state.movies],
      });
    })
  }
  render() {
    this.state.movies.pop()
    this.state.series.pop()
    return (
      <main role="main">
        <div className="py-5 bg-light">
          <div className="container">
            <Section sectionTitle="Mi lista ">
              {this.state.movies.map(movie => (
                <ItemSection
                  movieTitle={movie.title}
                  src={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                  movieDate={movie.release_date}
                />
              ))}
            </Section>
            <Section sectionTitle="Series más Populares ">
              {this.state.series.map(serie => (
                <ItemSection
                  movieTitle={serie.original_name}
                  src={'https://image.tmdb.org/t/p/w500'+serie.poster_path}
                  movieDate={serie.first_air_date}
                />
              ))}
            </Section>
            <Section sectionTitle="Películas más Populares ">
              {this.state.movies.map(movie => (
                <ItemSection
                  movieTitle={movie.title}
                  src={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                  movieDate={movie.release_date}
                />
              ))}
            </Section>


          </div>
        </div>
      </main>
    )
  }
}

export default Home;
