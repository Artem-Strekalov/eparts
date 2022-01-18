import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
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
    padding: '0 20px',
  },
  span: {
    color: '#fff',
    marginRight: '30px',
    textAlign: 'center',
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
        <div>
          <span style={styled.span}>Мои заказы</span>
          <span style={styled.span}>Корзина</span>
          <span style={styled.span}>
            <AccountBoxIcon style={styled.icon}></AccountBoxIcon>
            Илья Бирюков
          </span>
        </div>
      </header>
    </div>
  )
}
export default Home
