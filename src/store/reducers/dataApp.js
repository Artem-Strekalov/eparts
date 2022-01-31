import defaultState from '../defaultState'
const dataApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {...state, statusModal: true}
    case 'CLOSE_MODAL':
      return {...state, statusModal: false}
    case 'ADD_DATA_TO_BASCKET':
      return {...state, dataBascket: action.payload}
    default:
      return state
  }
}
export default dataApp
