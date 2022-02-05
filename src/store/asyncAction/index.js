import {auth} from '../../firebase'
import {addCurrentUser} from '../actions'

export const fetchCurrentUser = () => {
  return (dispatch) => {
    const uid = async () => {
      return await auth.currentUser.uid
    }

    dispatch(addCurrentUser({id: uid}))
  }
}
