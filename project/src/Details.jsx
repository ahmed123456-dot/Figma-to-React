import { useState } from 'react'
import { Footer } from './assets/components/footer/footer'
import { Header } from './assets/components/Header/Header'
import { Detail } from './assets/components/Details/Detail'
import { CartData } from './cartcontext';
function Details() {
  const [myCart, setMyCart] = useState([]);
  

  return (
    <>
    <CartData.Provider value={myCart}>
   <Header/>
   <Detail CartData={myCart} SetCart={setMyCart} />
    <Footer/>
    </CartData.Provider>
    

    
    </>
  )
}
export default Details