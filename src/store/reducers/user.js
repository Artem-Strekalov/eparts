import defaultUser from '../defaultUser'

const user = (state = defaultUser, action) => {
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

    case 'ADD_CURRENT_USER':
      return {...state, currentUser: action.payload}

    default:
      return state
  }
}
export default user
