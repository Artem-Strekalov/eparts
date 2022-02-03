import './Auth.scss'
import {auth} from '../../firebase'
import Einput from '../../ui/Einput'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addCurrentUser} from '../../store/actions'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Auth = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getEmail = (value) => setForm({...form, email: value})
  const getPassword = (value) => setForm({...form, password: value})
  const authorization = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch(addCurrentUser(user))
        navigate('/home')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }
  const marginBottom = {marginBottom: '10px'}
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
