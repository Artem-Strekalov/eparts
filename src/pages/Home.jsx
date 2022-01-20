import React, {useState} from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import RestoreIcon from '@mui/icons-material/Restore'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import Einput from '../ui/Einput'

const Home = () => {
  const [hover, setHover] = useState(false)
  function showHover() {
    setHover(true)
  }
  function hideHover() {
    setHover(false)
  }
  const styled = {
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'auto',
    header: {
      width: '100%',
      height: '80px',
      background: '#0075c4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
    },
    navItem: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      marginRight: '40px',
      textAlign: 'center',
      cursor: 'pointer',
      fontSize: '14px',
    },
    navCounter: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'red',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '-10px',
      left: '10px',
    },
    icon: {
      color: '#fff',
      marginRight: '5px',
    },
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      height: 'calc(100vh - 80px)',
    },
    search: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '40%',
      background: '#efa00b',
    },
    searchSpan: {
      color: '#fff',
      fontSize: '20px',
      marginBottom: '20px',
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
  }

  return (
    <div style={styled}>
      <header style={styled.header}>
        <img src={process.env.PUBLIC_URL + '/image/svg/logo.svg'} />
        <div style={styled.nav}>
          <div style={styled.navItem}>
            <HomeIcon style={styled.icon} />
            Склад
          </div>
          <div style={styled.navItem}>
            <RestoreIcon style={styled.icon} />
            Мои заказы
          </div>
          <div style={styled.navItem}>
            <span style={styled.navCounter}>4</span>
            <ShoppingCartIcon style={styled.icon} />
            Корзина
          </div>
          <div style={styled.navItem}>
            <PhoneIcon style={styled.icon} />
            Контакты
          </div>
          <div style={styled.navItem}>
            <AccountBoxIcon style={styled.icon} />
            Илья Бирюков
          </div>
          <div style={styled.navItem}>
            <LogoutIcon style={styled.icon} />
            Выйти
          </div>
        </div>
      </header>
      <main style={styled.main}>
        <div style={styled.search}>
          <span style={styled.searchSpan}>
            Для поиска нужной детали используйте форму:
          </span>
          <form style={styled.searchForm}>
            <Einput
              height='50px'
              placeholder='Укажите номер, название или VIN'
            />
            <button
              onMouseEnter={showHover}
              onMouseLeave={hideHover}
              style={styled.searchBtn}
            >
              Найти
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
export default Home
