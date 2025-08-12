import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Carts from './pages/cart/Carts'
import { CartProvider } from './component/context/CartContext'
import Login from './pages/login/Login'

function App() {

  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/carts' element={<Carts />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </CartProvider>

    </div>
  )
}

export default App
