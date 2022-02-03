import './Auth.scss'
import React, {useState} from 'react'
import Einput from '../../ui/Einput'
import {Link} from 'react-router-dom'
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const getEmail = (value) => {
    setEmail(value)
  }
  return (
    <div className='content'>
      <div className='content__header'>
        <img src={process.env.PUBLIC_URL + '/image/svg/logo.svg'} />
      </div>
      <div className='content__main'>
        <form>
          <h2>Восстановление пароля</h2>
          <Einput
            type='email'
            title='Email'
            email={true}
            required={true}
            onChange={getEmail}
          />
          <button className='content__form-btn'>Отправить</button>
          <div className='content__form-footer'>
            <Link className='content__link' to='/'>
              Назад
            </Link>
          </div>
        </form>
        <img
          className='content__main-img'
          src={process.env.PUBLIC_URL + '/image/png/tractor.png'}
        />
      </div>
    </div>
  )
}
export default ForgotPassword
