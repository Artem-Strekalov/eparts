import React, {useState} from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import RestoreIcon from '@mui/icons-material/Restore'
const styled = {
  width: '100%',
  height: '100vh',
  background: '#f1f1f1',
  boxSizing: 'border-box',
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
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    marginRight: '30px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  icon: {
    color: '#fff',
    marginRight: '10px',
  },
}

const Home = () => {
  return (
    <div style={styled}>
      <header style={styled.header}>
        <img src={process.env.PUBLIC_URL + '/image/svg/logo.svg'} />
        <div style={styled.nav}>
          <div style={styled.navItem}>
            <RestoreIcon style={styled.icon} />
            Мои заказы
          </div>
          <div style={styled.navItem}>
            <ShoppingCartIcon style={styled.icon} /> Корзина
          </div>
          <div style={styled.navItem}>
            <AccountBoxIcon style={styled.icon} />
            Илья Бирюков
          </div>
        </div>
      </header>
    </div>
  )
}
export default Home
