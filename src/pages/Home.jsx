import React, {useState, useEffect} from 'react'
import Einput from '../ui/Einput'
import Etable from '../ui/Etable'
import Loading from '../ui/Loading'
import Emodal from '../ui/Emodal'
import appFirebase from '../firebase'
import {getFirestore} from 'firebase/firestore'
import {collection, getDocs, where, query} from 'firebase/firestore'
import Eheader from '../ui/Eheader'
import {useSelector, useDispatch} from 'react-redux'
import { closeBascketMessage } from '../store/actions'

const db = getFirestore(appFirebase)
const Home = () => {
  const [load, setLoad] = useState(false)
  const [search, setSearch] = useState('')
  const [hover, setHover] = useState(false)
  const [dataParts, setDataParts] = useState([])
  const [noData, setNoData] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [dataCart, setDataCart] = useState('')
  const dispatch = useDispatch()
  const statusBascketMessage = useSelector(
    (state) => state.helper.statusBascketMessage,
  )
  useEffect(() => {
    setTimeout(() => dispatch(closeBascketMessage()), 3000);
  }, [statusBascketMessage])

  function showHover() {
    setHover(true)
  }
  function hideHover() {
    setHover(false)
  }
  function getSearch(value) {
    setSearch(value.toLowerCase().trim())
  }

  //запрос
  async function getData(e) {
    setDataParts([])
    setNoData(false)
    setSearchQuery('')

    const querySnapshot = await query(
      collection(db, 'eparts'),
      where(`keys.${search}`, '==', true),
    )
    const response = await getDocs(querySnapshot)
    const newArray = []
    response.forEach((doc) => {
      newArray.push(doc.data())
    })
    setSearchQuery(search)
    newArray.length == 0 ? setNoData(true) : await setDataParts(newArray)
    setLoad(false)
  }

  //вызов на загрузку
  function loadData(e) {
    e.preventDefault()
    setLoad(true)
  }
  //загрузка
  useEffect(() => {
    getData()
  }, [load])

  const styled = {
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'auto',
    main: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 80px)',
    },
    search: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100px',
      background: '#f1f1f1',
    },
    searchForm: {
      display: 'flex',
      maxWidth: '600px',
      width: '100%',
    },
    searchBtn: {
      maxWidth: '150px',
      width: '100%',
      fontSize: '14px',
      background: '#0075c4',
      color: '#fff',
      borderRadius: '10px',
      border: 'none',
      marginLeft: '20px',
      boxShadow: `${hover ? ' 0 0 10px #0075c4' : 'none'}`,
      cursor: 'pointer',
    },
    table: {
      width: '100%',
      padding: '10px',
    },
    addCart: {
      position: 'absolute',
      width: '200px',
      height: '50px',
      opacity: '0.7',
      background: 'red',
      top: '105px',
      right: '20px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      color: '#fff',
    },
  }

  return (
    <div style={styled}>
      <Eheader activeLink='#efa00b' />
      <main style={styled.main}>
        <div style={styled.search}>
          <form style={styled.searchForm} onSubmit={loadData}>
            <Einput
              height='50px'
              placeholder='Укажите номер запчасти или название'
              onChange={getSearch}
              required={true}
            />
            <button
              id='test'
              onMouseEnter={showHover}
              onMouseLeave={hideHover}
              style={styled.searchBtn}
            >
              Найти
            </button>
          </form>
        </div>
        <div style={styled.table}>
          {dataParts.length > 0 ? (
            <Etable data={JSON.stringify(dataParts)} />
          ) : (
            ''
          )}

          {noData ? (
            <p>
              По вашему запросу {searchQuery.toUpperCase()} ничего не найдено
            </p>
          ) : (
            ''
          )}
        </div>
      </main>
      {statusBascketMessage ? (
        <div style={styled.addCart}> Заказ добавлен в корзину</div>
      ) : (
        ''
      )}

      <Emodal></Emodal>
      {load ? <Loading /> : null}
    </div>
  )
}
export default Home
