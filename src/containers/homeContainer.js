import { connect } from 'react-redux'
import  Home  from '../Views/home/'
import { compose, lifecycle } from 'recompose'
import Axios from 'axios'


const mapStateToProps = state => ({
  movies: state.movies.movies
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
//  console.log(generoPeliculaID)
  dispatch(categoriesFetched())
  Axios.get('/movie/popular', { params: {
      api_key: '8bd42374a45989a00cd13bc15ad622dd',
      language: 'es-AR',
  //    genres: generoPeliculaID,
      page: 1
    }
  }).then(response =>
    dispatch(categoriesSuccess(response.data.results))
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
