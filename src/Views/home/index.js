import React, { Component } from 'react';
import TheMovieDbApi from '../../TheMovieDbApi.js'
import {Link} from 'react-router-dom'
//components
import ItemSection from '../../components/itemSection.js'
import Section from '../section.js'
//views
import GlobalContainer from '../Container.js'



class Home extends Component {
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      movies: [],
      series: [],
      loading: true
    };
  }
  componentDidMount() {
    this.api.getPopularMovies().then(res => {
      console.log(res.data.results)
      const movies = res.data.results
      this.setState({
        movies: [...movies, this.state.movies],
        loading: false
      });
    })
    this.api.getPopularSeries().then(res => {
      console.log(res.data.results)
      const series = res.data.results
      this.setState({
        series: [...series, this.state.movies],
        loading: false
      });
    })
  }

  render() {
    const loading =  this.state.loading
    this.state.movies.pop()
    this.state.series.pop()
    return (
      <GlobalContainer>
            <Section sectionTitle="Películas más Populares ">
              { loading === true ? (
                  <div className="dimmer">
                      <div className="loading">
                          <i className="mdi mdi-loading" aria-hidden="true"></i>
                      </div>
                  </div>
                  ) : (
                    this.state.movies.map( (movie, i) => {
                      if (i < 6) {
                      return  <ItemSection
                          movieTitle={movie.title}
                          src={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                          movieDate={movie.release_date}
                        />
                      }
                    })
                  )}
            </Section>

            <Section sectionTitle="Series más Populares ">
              { loading === true ? (
                  <div className="dimmer">
                      <div className="loading">
                          <i className="mdi mdi-loading" aria-hidden="true"></i>
                      </div>
                  </div>
                  ) : (
                    this.state.series.map((serie, i) => {
                      if (i < 6) {
                        return <ItemSection
                          movieTitle={serie.original_name}
                          src={'https://image.tmdb.org/t/p/w500'+serie.poster_path}
                          movieDate={serie.first_air_date}
                        />
                      }

                    })
                  )}
            </Section>
            <Section sectionTitle="Mi lista ">
              { loading === true ? (
                  <div className="dimmer">
                      <div className="loading">
                          <i className="mdi mdi-loading" aria-hidden="true"></i>
                      </div>
                  </div>
                  ) : (
                    this.state.movies.map((movie, i) => {
                      if (i < 6) {
                      return  <ItemSection
                          movieTitle={movie.title}
                          src={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                          movieDate={movie.release_date}
                        />
                      }
                    })
                  )}
            </Section>
        </GlobalContainer>
    )
  }
}

export default Home;
