import {onAuthStateChanged} from 'firebase/auth'
import {doc, getDoc} from 'firebase/firestore'
import {auth, db} from '../../firebase'
import {addCurrentUser} from '../actions'

export const fetchCurrentUser = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid)
        const uid = user.uid
        const path = doc(db, 'users', `${uid}`)
        const dataUser = getDoc(path)
        dispatch(addCurrentUser(dataUser.data()))
      }
    })
  }
}
