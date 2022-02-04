import defaultHelper from '../defaultHelper'

const loadUserData = async () => {

}

const helper = (state = defaultHelper, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {...state, statusModal: true}
    case 'CLOSE_MODAL':
      return {...state, statusModal: false}
    case 'SHOW_BASCKET_MESSAGE':
      return {...state, statusBascketMessage: true}
    case 'CLOSE_BASCKET_MESSAGE':
      return {...state, statusBascketMessage: false}
    default:
      return state
  }
}
export default helper
