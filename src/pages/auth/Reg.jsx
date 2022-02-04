import './Auth.scss'
import Einput from '../../ui/Einput'
import {auth, db} from '../../firebase'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {addCurrentUser} from '../../store/actions'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {doc, setDoc} from 'firebase/firestore'

const Reg = () => {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    secondName: '',
    phone: '',
    company: '',
    password: '',
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getEmail = (value) => setForm({...form, email: value})
  const getPhone = (value) => setForm({...form, phone: value})
  const getPassword = (value) => setForm({...form, password: value})
  const getFirstName = (value) => setForm({...form, firstName: value})
  const getSecondName = (value) => setForm({...form, secondName: value})
  const getCompany = (value) => setForm({...form, company: value})
  const sendUsersInfo = async (
    email,
    firstName,
    secondName,
    phone,
    company,
    id,
  ) => {
    await setDoc(doc(db, 'users', `${id}`), {
      email,
      firstName,
      secondName,
      phone,
      company,
      uid: id,
    })
  }

  const registred = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch(addCurrentUser(user))
        // загружаем данные о пользователе на firebase
        sendUsersInfo(
          form.email,
          form.firstName,
          form.secondName,
          form.phone,
          form.company,
          user.uid,
        )
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
        <form onSubmit={registred}>
          <h2>Регистрация на Eparts</h2>
          <Einput
            type='email'
            title='Email'
            required={true}
            onChange={getEmail}
            customStyle={marginBottom}
          />
          <Einput
            title='Имя'
            required={true}
            onChange={getFirstName}
            customStyle={marginBottom}
          />
          <Einput
            title='Фамилия'
            required={true}
            onChange={getSecondName}
            customStyle={marginBottom}
          />
          <Einput
            title='Телефон'
            required={true}
            onChange={getPhone}
            customStyle={marginBottom}
          />
          <Einput
            required={true}
            title='Организация'
            customStyle={marginBottom}
            onChange={getCompany}
          />
          <Einput
            title='Пароль'
            type='password'
            required={true}
            onChange={getPassword}
          />
          <button type='submit' className='content__form-btn'>
            Зарегистрироваться
          </button>
          <div className='content__form-footer'>
            <Link className='content__link' to='/'>
              У меня уже есть аккаунт
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
export default Reg
