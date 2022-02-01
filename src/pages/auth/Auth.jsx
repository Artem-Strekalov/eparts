import './Auth.scss'
import React, {useState} from 'react'
import Einput from '../../ui/Einput'
import {Link} from 'react-router-dom'
import appFirebase from '../../firebase'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const Auth = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const marginBottom = {marginBottom: '10px'}
  function getEmail(value) {
    setForm({...form, email: value})
  }
  function getPassword(value) {
    setForm({...form, password: value})
  }
  const auth = getAuth(appFirebase)
  async function authorization(e) {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <div className='content'>
      <div className='content__header'>
        <img src={process.env.PUBLIC_URL + '/image/svg/logo.svg'} />
      </div>
      <div className='content__main'>
        <form onSubmit={authorization}>
          <h2>Авторизация на Eparts</h2>
          <Einput
            type='email'
            title='Email'
            email={true}
            required={true}
            onChange={getEmail}
            customStyle={marginBottom}
          />
          <Einput
            title='Пароль'
            type='password'
            required={true}
            onChange={getPassword}
          />
          <button type='submit' className='content__form-btn'>
            Войти
          </button>
          <div className='content__form-footer'>
            <Link className='content__link-reg' to='/reg'>
              Зарегистрироваться
            </Link>
            <Link className='content__link' to='/forgot-password'>
              Забыли пароль?
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
export default Auth
