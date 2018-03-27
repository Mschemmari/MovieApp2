import React, { Component } from 'react';
import TheMovieDbApi from '../../TheMovieDbApi.js'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

//components
import MovieBox from '../../components/movieBox/movieBox.js';
import Select from '../../components/select/select.js'
import ItemSection from '../../components/itemSection.js'
import Section from '../section.js'
//Views
import GlobalContainer from '../Container.js'



class Peliculas extends Component {
  constructor() {
    super()
    this.api = new TheMovieDbApi()
    this.state = {
      movies: [],
      years: [],
      genreList: [],
      active: false
    }
  }
  componentDidMount(){
    this.api.getMoviesList().then(res => {
      const genres = res.data.genres
      this.setState({
        genreList: genres
      })
    })
    this.api.getPopularMovies().then(res => {
      const movies = res.data.results
      console.log(movies);
      this.setState({
        movies: movies
      })
    })
  }

  sortItem = (event)=>{
    const sort_by = event.target.value
    const year = event.target.value
    this.setState({
      sort_by: event.target.value,
      itemsList: [],
      itemSelected: null,
    })
    this.api.getDiscover(sort_by, year).then(res => {
      const items = res.data.results
      this.setState({
        movies: items
      });
    })
  }
  sortByGenre = (e) =>{

  }

 toggleView = () => {
    this.setState({active : !this.state.active});
  }
  // toggleList() {
  //   this.setState({active : true});
  // }
  render() {
    const years = []
    let currentYear = new Date().getFullYear();
    let startYear = 1900
    while ( startYear <= currentYear ) {
            years.push(startYear++);
    }
    years.reverse()

    return (
      <GlobalContainer>
        <h1>Películas</h1>
        <div className="filters-bar">
            <div className="filters-bar-left">
              <Select handleChange={this.sortItem}>
                {years.map((year, i) => (
                  <option key={i} value={year}>{year}</option>
                ))}
              </Select>
                <Select name="filter-sort" id="filter-sort" handleChange={this.sortItem}>
                  <option value="popo">Ordenar por</option>
                  <option value="popularity.desc">Popularidad </option>
                  <option value="original_title.asc">titulo</option>
                  <option value="primary_release_date.desc">Fecha</option>
                </Select>
                <Select name="filter-genre" id="filter-genre" handleChange={this.sortByGenre}>
                  {this.state.genreList.map((genre, i) => (
                    <option key={i} value={genre.id}>{genre.name}</option>
                  ))}
                </Select>
            </div>
            <div className="filters-bar-right">
                <a onClick={this.toggleView} className={`btn btn-light ${this.state.active ? '' : 'active'}`}aria-label="Profile">

                    <i className="mdi mdi-view-grid" aria-hidden="true"></i>
                </a>

                <a onClick={this.toggleView} className={`btn btn-light ${this.state.active ? 'active' : ''}`} aria-label="Profile">
                    <i className="mdi mdi-view-list" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <Section>
                {this.state.active  ?  (
                  this.state.movies.map((movie, i) => (
                    <MovieBox
                      title={movie.title}
                      key={i}
                      src={movie.poster_path === null ? console.log('hola'): 'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                      overview={movie.overview}
                    />

                  ))
                ) : (
                  this.state.movies.map((movie, i) => (
                    <ItemSection
                      key={i}
                      movieTitle={movie.title}
                      src={movie.poster_path === null ? console.log('hola') : 'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                      movieDate={movie.release_date}
                    />
                  ))
                )

                }
        </Section>
      </GlobalContainer>
    )
  }
}

export default Peliculas;
