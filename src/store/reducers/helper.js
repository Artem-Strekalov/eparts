import defaultHelper from '../defaultHelper'
const helper = (state = defaultHelper, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {...state, statusModal: true}
    case 'CLOSE_MODAL':
      return {...state, statusModal: false}
    default:
      return state
  }
}
export default helper