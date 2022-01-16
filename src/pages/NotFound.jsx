import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
  const notFound = {
    width: '100vw',
    height: '100vh',
    background: '#0075c4',
    color: '#fff',
    padding: '40px',
    goAuth: {
      color: '#efa00b',
    },
  }
  return (
    <div style={notFound}>
      <h1>Извините, такой страницы не существует...</h1>
      <Link style={notFound.goAuth} to='/'>
        Страница авторизации
      </Link>
    </div>
  )
}

export default NotFound
