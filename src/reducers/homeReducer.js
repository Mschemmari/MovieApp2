const initalState = {
  movies: [],
	loading: true
}

export default (state = initalState, { type, ...payload }) => {
  switch (type) {
    case 'FETCH_CATEGORIES_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        movies: payload.movies,
        loading: false,
        // isFetched: true
      }
    case 'FETCH_CATEGORIES_FAILURE':
      return {
        ...state,
        error: payload.error,
        loading: false,
        // isFetched: false
      }
    default:
      return state
  }
}
