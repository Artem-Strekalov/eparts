import './Auth.scss'
import React, {useState} from 'react'
import Einput from '../../ui/Einput'

const Reg = () => {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    secondName: '',
    phone: '',
    organization: '',
    password: '',
  })

  function getEmail(value) {
    setForm({...form, email: value})
  }
  function getFirstName(value) {
    setForm({...form, firstName: value})
  }
  function getSecondName(value) {
    setForm({...form, secondName: value})
  }
  function getPhone(value) {
    setForm({...form, phone: value})
  }
  function getOrganization(value) {
    setForm({...form, organization: value})
  }
  function getPassword(value) {
    setForm({...form, password: value})
  }
  const marginBottom = {marginBottom: '10px'}
  console.log(form)
  return (
    <div className='content'>
      <div className='content__header'>
        <img src={process.env.PUBLIC_URL + '/image/svg/logo.svg'} />
      </div>
      <div className='content__main'>
        <form onSubmit={console.log(form)}>
          <h2>Регистрация на Eparts</h2>
          <Einput
            type='email'
            title='Email'
            email={true}
            required={true}
            onChange={getEmail}
            customStyle={marginBottom}
            className='content__input'
          />
          <Einput
            title='Имя'
            required={true}
            onChange={getFirstName}
            customStyle={marginBottom}
            className='content__input'
          />
          <Einput
            title='Фамилия'
            required={true}
            onChange={getSecondName}
            customStyle={marginBottom}
            className='content__input'
          />
          <Einput
            title='Телефон'
            required={true}
            onChange={getPhone}
            customStyle={marginBottom}
            className='content__input'
          />
          <Einput
            required={true}
            title='Организация'
            customStyle={marginBottom}
            className='content__input'
            onChange={getOrganization}
          />
          <Einput
            title='Пароль'
            type='password'
            required={true}
            onChange={getPassword}
            className='content__input'
          />
          <button type='submit' className='content__form-btn'>
            Зарегистрироваться
          </button>
          <div className='content__form-footer'>
            <p className='content__link-reg'>У меня уже есть аккаунт</p>
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
