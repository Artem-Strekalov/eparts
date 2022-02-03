import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBlPdlZI4QBis52d6l0QJGa9DhtKCzZfwo',
  authDomain: 'eparts-4de00.firebaseapp.com',
  projectId: 'eparts-4de00',
  storageBucket: 'eparts-4de00.appspot.com',
  messagingSenderId: '504331053119',
  appId: '1:504331053119:web:c93cbac045ec18264fb08a',
}
const appFirebase = initializeApp(firebaseConfig)

export const auth = getAuth(appFirebase)
export default appFirebase
