import { useState } from 'react'
import { Header } from './assets/components/Header/Header'
import { Footer } from './assets/components/footer/footer'
import { Homes } from './assets/components/Home/Home'
import { Slider } from './assets/components/Header/slider'


function Home() {
  

  return (
    <>
  <Header/>
  <Slider/>
  <Homes/>
  <Footer/>
    

    
    </>
  )
}
export default Home