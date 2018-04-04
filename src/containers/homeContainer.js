import { connect } from 'react-redux'
import  Home  from '../Views/home/'
import { compose, lifecycle } from 'recompose'
import Axios from 'axios'


const mapStateToProps = state => ({
  movies: state.movies
})

const categoriesSuccess = movies => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  movies
})

const categoriesFetched = () => ({
  type: 'FETCH_CATEGORIES_REQUEST'
})

const categoriesFailed = error => ({
  type: 'FETCH_CATEGORIES_FAILURE',
  error
})

const fetchCategories = () => dispatch => {
    dispatch(categoriesFetched())
  Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f259c936af962a17bb148cc941b8de9b&language=en-US&page=1').then(res =>
    dispatch(categoriesSuccess(res.data.results))
  , err =>
    dispatch(categoriesFailed(err.message))
  )
}

export default compose(
  connect(mapStateToProps, { fetchCategories }),
  lifecycle({
    componentDidMount () {
      this.props.fetchCategories()
    }
  })
)(Home)
