import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home'
import  Detail  from './Details'
import  Products  from './Products'
import Signup from './Signup'
import { Link } from 'react-router'
import {Routes, Route} from 'react-router'
import Login from './login'
import { Header } from './assets/components/Header/Header'

import { Footer } from './assets/components/footer/footer'
import Contact from './Contact'
import Cart from './Cart'




function App() {
  

  return (
    <>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Details' element={<Detail/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Cart' element={<Cart/>}/>


    </Routes>
  

    
    

    
    </>
  )
}

export default App
