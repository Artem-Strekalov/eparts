import defaultUser from '../defaultUser'
import {auth, db} from '../../firebase'
import {doc, getDoc} from 'firebase/firestore'
import {onAuthStateChanged} from 'firebase/auth'


const loadCurrentUser = async () => {
  console.log(auth.currentUser.uid)

  /* const uid = await auth.currentUser.uid
  const path = doc(db, 'users', `${uid}`)
  const getData = await getDoc(path)
  let dataUser
  getData.exists() ? (dataUser = getData.data()) : (dataUser = null)
  console.log(dataUser)
  return dataUser */
}

loadCurrentUser()
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
