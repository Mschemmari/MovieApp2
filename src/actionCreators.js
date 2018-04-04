import actionTypes from './actionTypes'

const API_KEY = 'f259c936af962a17bb148cc941b8de9b'
const baseURL = 'https://api.themoviedb.org/3'


// const asignarParticipantes = participantes => ({
// 	type: actionTypes.ASIGNAR_PARTICIPANTES,
// 	participantes
// })

export const getPopularMovies = () => dispatch =>
	fetch(baseURL + API_KEY + `/movie/popular`)
		.then(res => res.json())
		.then(data => {
			dispatch(getPopularMovies(data.items))
		}).catch(error => console.log(error))

// export const isParticipanteSelected = (state, id) => state.seleccion.indexOf(id) !== -1
//
// export const cambiarSeleccionParticipante = (id) => (dispatch, getState) => {
// 	const state = getState()
// 	if (isParticipanteSelected(state, id)){
// 		dispatch(deseleccionarParticipante(id))
// 	}else{
// 		dispatch(seleccionarParticipante(id))
// 	}
// }
//
// export const seleccionarParticipante = (id) => ({
// 	type: actionTypes.SELECCIONAR_PARTICIPANTE,
// 	id
// })
//
// export const deseleccionarParticipante = (id) => ({
// 	type: actionTypes.DESELECCIONAR_PARTICIPANTE,
// 	id
// })
//
// export const removerParticipante = (id) => ({
// 	type: actionTypes.REMOVER_PARTICIPANTE,
// 	id
// })
//
// export const removerParticipantesSeleccionados = () =>(dispatch, getState) => {
// 	const state = getState()
// 	state.seleccion.forEach(id => dispatch(removerParticipante(id)))
// }
// export const aprobarParticipante = id => dispatch => {
// 	return fetch('/5a42648f300000201b709dfd', {
// 			method: 'PUT'
// 		}).then(res => res.json())
//
// }
//
// export const aprobarParticipantesSeleccionados = () => (dispatch, getState) => {
// 	const { seleccion } = getState()
// 	seleccion.forEach(id => dispatch(aprobarParticipante(id)))
// }
