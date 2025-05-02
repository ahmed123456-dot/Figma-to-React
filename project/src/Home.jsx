import { useState } from 'react'
import { Header } from './assets/components/Header/Header'
import { Footer } from './assets/components/footer/footer'
import { Homes } from './assets/components/Home/Home'
import { Slider } from './assets/components/Header/slider'
import { CartData } from './cartcontext'


function Home() {
  const [myCart, setMyCart] = useState([]);


  return (
    <>
      <CartData.Provider value={myCart}>
        <Header />
        <Slider />
        <Homes CartData={myCart} SetCart={setMyCart} />
        <Footer />
      </CartData.Provider>



    </>
  )
}
export default Home