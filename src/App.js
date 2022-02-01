import './App.css'
import React from 'react'
import Auth from './pages/auth/Auth'
import Reg from './pages/auth/Reg'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import ForgotPassword from './pages/auth/ForgotPassword'
import {Routes, Route, Link} from 'react-router-dom'
import Cart from './pages/Cart'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='reg' element={<Reg />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='home' element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default App
