import {onAuthStateChanged} from 'firebase/auth'
import {doc, getDoc} from 'firebase/firestore'
import {auth, db} from '../../firebase'
import {addCurrentUser} from '../actions'

export const fetchCurrentUser = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      const uid = user.uid
      const path = await doc(db, 'users', `${uid}`)
      const getUser = await getDoc(path)
      const dataUser = getUser.data()
      dispatch(addCurrentUser(dataUser))
    })
  }
}
