import defaultState from '../defaultUser'
const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHOOSE_A_PRODUCT':
      return {...state, selectedProduct: action.payload}
    case 'ADD_DATA_TO_BASCKET':
      return {...state, dataBascket: [...state.dataBascket, action.payload]}
    default:
      return state
  }
}
export default user
