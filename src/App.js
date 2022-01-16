import './App.css'
import React from 'react'
import Auth from './pages/auth/Auth'
import Reg from './pages/auth/Reg'
import NotFound from './pages/NotFound'
import ForgotPassword from './pages/auth/ForgotPassword'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='reg' element={<Reg />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default App
