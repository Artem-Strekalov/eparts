import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {collection, getDocs, where, query} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBlPdlZI4QBis52d6l0QJGa9DhtKCzZfwo',
  authDomain: 'eparts-4de00.firebaseapp.com',
  projectId: 'eparts-4de00',
  storageBucket: 'eparts-4de00.appspot.com',
  messagingSenderId: '504331053119',
  appId: '1:504331053119:web:c93cbac045ec18264fb08a',
}
const appFirebase = initializeApp(firebaseConfig)
const db = getFirestore()

//поиск работает, разберись с поиском по нескольким словам
/* const ref = doc(db, 'eparts') */

async function getData() {
  const querySnapshot = await query(
    collection(db, 'eparts'),
    where('keys.45180', '==', true),
  )
  const test = await getDocs(querySnapshot)
  test.forEach((doc) => {
    console.log(doc.data())
  })
}

getData()
export default appFirebase
