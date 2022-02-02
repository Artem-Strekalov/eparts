import defaultState from '../defaultUser'
const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHOOSE_A_PRODUCT':
      return {...state, selectedProduct: action.payload}
    case 'ADD_DATA_TO_BASCKET':
      return {...state, dataBascket: [...state.dataBascket, action.payload]}
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        dataBascket: state.dataBascket.filter(
          (item) => item.id != action.payload,
        ),
      }
    case 'REMOVE_ALL_ITEM_FROM_CART':
      return {...state, dataBascket: []}
    default:
      return state
  }
}
export default user
