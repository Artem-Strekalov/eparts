export const addDataToBascket = (payload) => {
  return {type: 'ADD_DATA_TO_BASCKET', payload}
}
export const showModal = () => {
  return {type: 'SHOW_MODAL'}
}
export const closeModal = () => {
  return {type: 'CLOSE_MODAL'}
}