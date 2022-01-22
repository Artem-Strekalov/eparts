import {initializeApp} from 'firebase/app'
import {
  getDatabase,
  ref,
  onValue,
  orderByChild,
  get,
  equalTo,
  query,
  startAt,
  startAfter,
  endAt,
} from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBlPdlZI4QBis52d6l0QJGa9DhtKCzZfwo',
  authDomain: 'eparts-4de00.firebaseapp.com',
  projectId: 'eparts-4de00',
  storageBucket: 'eparts-4de00.appspot.com',
  messagingSenderId: '504331053119',
  appId: '1:504331053119:web:c93cbac045ec18264fb08a',
}
const appFirebase = initializeApp(firebaseConfig)

const db = getDatabase(appFirebase)
const dbRef = ref(db, 'products')
const getData = async () => {
  const data = await get(query(dbRef, orderByChild('name'), equalTo('118370')))
  console.log(data.val())
  return data.val()
}
getData()
export default appFirebase
