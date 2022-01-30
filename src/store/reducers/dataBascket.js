
const dataBascket = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DATA_TO_BASCKET':
      return [...state, action.payload]
    default:
      return state
  }
}
export default dataBascket
