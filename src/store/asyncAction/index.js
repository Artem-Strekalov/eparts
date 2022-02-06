import {onAuthStateChanged} from 'firebase/auth'
import {doc, getDoc} from 'firebase/firestore'
import {auth, db} from '../../firebase'
import {addCurrentUser} from '../actions'

export const fetchCurrentUser = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid
        const path = doc(db, 'users', `${uid}`)
        const getData = await getDoc(path)
        const dataUser = getData.data()
        dispatch(addCurrentUser(dataUser))
      }
    })
  }
}
