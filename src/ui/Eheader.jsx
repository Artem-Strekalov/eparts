import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import LogoutIcon from '@mui/icons-material/Logout'
import RestoreIcon from '@mui/icons-material/Restore'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {useSelector} from 'react-redux'
import {useSatate, useEffect} from 'react'

const Eheader = () => {
  const dataBascket = useSelector((state) => state.dataBascket)
  const styled = {
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
      textDecoration: 'none',
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
      marginRight: '5px',
      fontSize: '20px',
    },
  }
  const styleLink = ({isActive}) =>
    isActive ? {...styled.navItem, color: '#fff200'} : styled.navItem

  return (
    <header style={styled.header}>
      <img src={process.env.PUBLIC_URL + '/image/svg/logo.svg'} />
      <div style={styled.nav}>
        <NavLink style={styleLink} to='/home'>
          <HomeIcon style={styled.icon} />
          Склад
        </NavLink>
        <div style={styled.navItem}>
          <RestoreIcon style={styled.icon} />
          Мои заказы
        </div>
        <NavLink style={styleLink} to='/cart'>
          {dataBascket.length != 0 ? (
            <span style={styled.navCounter}>{dataBascket.length}</span>
          ) : (
            ''
          )}
          <ShoppingCartIcon style={styled.icon} />
          Корзина
        </NavLink>
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
  )
}
export default Eheader
