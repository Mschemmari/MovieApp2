import actionTypes from '../actionTypes'

const initialState = {
	movies: [],
	loading: true
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ASIGNAR_PARTICIPANTES:
			return {
				...state,
				participantes: action.participantes
			}
    case actionTypes.SELECCIONAR_PARTICIPANTE:
      return {
        ...state,
        seleccion: [...state.seleccion, action.id]
      }
    case actionTypes.DESELECCIONAR_PARTICIPANTE:
      return {
        ...state,
        seleccion: state.seleccion.filter(item => item !== action.id )
      }
    case actionTypes.REMOVER_PARTICIPANTE:
      return{
        ...state,
        participantes: state.participantes.filter(item => item.id !== action.id)
      }
		default:
			return state
	}
}
