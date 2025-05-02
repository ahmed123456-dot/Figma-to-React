import { useState } from 'react'
import { Header } from './assets/components/Header/Header'
import { Product } from './assets/components/Products/Products'
import { Footer } from './assets/components/footer/footer'
import { CartData } from './cartcontext';

function Products() {
  const [myCart, setMyCart] = useState([]);
  

  return (
    <>
    <CartData.Provider value={myCart}>
   <Header/>
   <Product myCartData={myCart} setData={setMyCart}/>
   <Footer/>
   </CartData.Provider>
    

    
    </>
  )
}
export default Products