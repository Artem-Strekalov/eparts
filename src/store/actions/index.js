//user
export const chooseProduct = (payload) => {
  return {type: 'CHOOSE_A_PRODUCT', payload}
}
export const addDataToBascket = (payload) => {
  return {type: 'ADD_DATA_TO_BASCKET', payload}
}
export const removeItemFromCart = (payload) => {
  return {type: 'REMOVE_ITEM_FROM_CART', payload}
}
export const removeAllItemFromCart = (payload) => {
  return {type: 'REMOVE_ALL_ITEM_FROM_CART', payload}
}
//helper
export const showModal = () => {
  return {type: 'SHOW_MODAL'}
}
export const closeModal = () => {
  return {type: 'CLOSE_MODAL'}
}

export const showBascketMessage = () => {
  return {type: 'SHOW_BASCKET_MESSAGE'}
}
export const closeBascketMessage = () => {
  return {type: 'CLOSE_BASCKET_MESSAGE'}
}
