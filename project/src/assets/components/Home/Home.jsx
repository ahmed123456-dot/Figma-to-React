import React, { useContext } from 'react'
import frame1 from '../Header/images/Frame1.png';
import {products} from '../../../data/product'



export const Homes = ({CartData,SetCart}) => {
   const cart = useContext(CartData)
  
  
    const AddtoCart = () => {
      let productDetails = {
        id: 1,
        name: "Apple MacBook Pro",
        price: 1999.99,
        description: "14-inch laptop with Apple M2 chip, Retina display, and all-day battery life.",
        image: "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?t=st=1745005696~exp=1745009296~hmac=9870338dd100d4da1cac7f1ab8c6ddf783158f1400ca16cd9db489ade69d6afa&w=1380"
  
      }
      SetCart([...CartData,productDetails]);
      console.log(CartData)
    }




  const electronicsItems = [
    { name: "Laptop", icon: "fas fa-laptop" },
    { name: "Smartphone", icon: "fas fa-mobile-alt" },
    { name: "Tablet", icon: "fas fa-tablet-alt" },
    { name: "Camera", icon: "fas fa-camera" },
    { name: "Television", icon: "fas fa-tv" },
    { name: "Smartwatch", icon: "fas fa-stopwatch" },

  ];
  return (
    <body>

      <div className="container">
        
        <div className="row">
        <div className="d-flex justify-content-start my-3">
            <div className='me-3' style={{background:'crimson', width:'18px', height:'40px', borderRadius:'5px'}}></div>
            <h5 className="my-2 " style={{ fontSize: '16px', fontWeight: 'bold', color: 'crimson' }}>Categories</h5>

          </div>
          <h3 className=" text-start  text-uppercase ">Browse By Category</h3>

          {electronicsItems.map((list, index) => (
            <div key={index} className="col-lg-2 col-md-6 col-sm-12 ">
              <div className="card " style={{ height: "150px", width: "180px" }}>
                <div className="card-body text-center my-4">
                  <i className={list.icon} style={{ fontSize: '32px' }}></i>
                  <p className="card-title my-3" style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>{list.name}</p>

                </div>
              </div>
            </div>
          ))}


        </div>
      </div>

      <div className="container my-4">
        <div className="row">
        <div className="d-flex justify-content-start my-3">
            <div className='me-3' style={{background:'crimson', width:'18px', height:'40px', borderRadius:'5px'}}></div>
            <h5 className="my-2 " style={{ fontSize: '16px', fontWeight: 'bold', color: 'crimson' }}>This Month</h5>

          </div>
          <h3 className=" text-start  text-uppercase   ">Best Selling Products</h3>

          {products.slice(0, 4).map((list, index) => (
            <div key={index} className="col-lg-3 col-md-8 col-sm-16 my-4">
              <div className="" style={{ width: '250px', height: '350px' }}>
                <img
                  src={list.image}
                  style={{ width: '100%', height: 200, objectFit: 'cover', }}
                  className="card-img-top"
                  alt="..."
                />
                <hr />
                <div className="card-body text-start ">
                  <div className="d-flex justify-content-between">
                    <h5 className="me-4" style={{ fontSize: '20px', fontWeight: 'bold' }}>{list.name}</h5>
                    <a onClick={()=>AddtoCart()}>  <i className='fa-solid fa-cart-shopping' style={{ fontSize: '20px' ,color:'black'}}></i></a>
            </div>

                  <p className=" text-start card-text " style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>Price :  ${list.price}</p>
                  <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i>                      </div>




              </div>
            </div>

          ))}


        </div>
      </div>

      <div className="container my-4">
        <div className="row">
        <div className="d-flex justify-content-start my-3">
            <div className='me-3' style={{background:'crimson', width:'18px', height:'40px', borderRadius:'5px'}}></div>
            <h5 className="my-2 " style={{ fontSize: '16px', fontWeight: 'bold', color: 'crimson' }}>Our Products</h5>

          </div>
          <h3 className=" text-start  text-uppercase  ">Explore Our Products</h3>

          {products.map((list, index) => (
            <div key={index} className="col-lg-3 col-md-8 col-sm-16 my-4">
              <div className="" style={{ width: '250px', height: '350px' }}>
                <img
                  src={list.image}
                  style={{ width: '100%', height: 200, objectFit: 'cover', }}
                  className="card-img-top"
                  alt="..."
                />
                <hr />
                <div className="card-body text-start ">
                  <div className="d-flex justify-content-between">
                    <h5 className="me-4" style={{ fontSize: '20px', fontWeight: 'bold' }}>{list.name}</h5>
                    <a onClick={()=>AddtoCart()}>  <i className='fa-solid fa-cart-shopping' style={{ fontSize: '20px' ,color:'black'}}></i></a>
                    </div>

                  <p className=" text-start card-text " style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>Price :  ${list.price}</p>
                  <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i>                      </div>




              </div>
            </div>

          ))}


        </div>
       <div style={{display:'flex',justifyContent:'center'}}>
       <a href="/Details" style={{ color: 'white', background: 'crimson', padding: '12px 25px', textDecoration: 'none' }} className="my-4">
          View All Products
        </a>
       </div>

      </div>

      <div className="container my-5 " style={{display:'flex',justifyContent:'center',width:'100%'}}>
        <img src={frame1} />
      </div>

      <div className="container my-4">
        <div className="row">
         

          
            <div className="d-flex justify-content-around">
              <div className="text-center" >
                <div style={{background:'black', padding:'20px' , borderRadius:'50%', width:'100px',border:'10px solid lightgray', borderColor:'lightgray',margin: '0 auto',}}>
              <i className='fa-solid fa-truck-fast ' style={{ fontSize: '30px', color: 'white',alignItems: 'center' }}></i>
              </div>
              
                <div className="card-body text-center my-4">
                
                  <h4 className=" text-center  text-uppercase  ">Free and Fast Delivery</h4> 
                  <p className=" text-center  " style={{fontSize:'18px'}} >Free delivery for all orders over $140</p> 
                  

                  </div>



              </div>
              <div className="text-center" >
              <div style={{background:'black', padding:'20px' , borderRadius:'50%', width:'100px',border:'10px solid lightgray', borderColor:'lightgray',margin: '0 auto',}}>
              <i className='fa-solid fa-headphones-simple' style={{ fontSize: '30px', color: 'white',alignItems: 'center' }}></i>
              </div>
              
                <div className="card-body text-center my-4">
                
                  <h4 className=" text-center  text-uppercase  ">24/7 customer Service</h4> 
                  <p className=" text-center " style={{fontSize:'18px'}} >Friendly 24/7 customer support</p> 
                  

                  </div>



              </div>
              <div className="text-center" >
              <div style={{background:'black', padding:'20px' , borderRadius:'50%', width:'100px',border:'10px solid lightgray', borderColor:'lightgray',margin: '0 auto',}}>
              <i className='fa-solid fa-shield-halved' style={{ fontSize: '30px', color: 'white',alignItems: 'center' }}></i>
              </div>
              
                <div className="card-body text-center my-4">
                
                  <h4 className=" text-center  text-uppercase  ">Money back Guarantee</h4> 
                  <p className=" text-center  " style={{fontSize:'18px'}} >We return money within 30 days</p> 
                  

                  </div>



              </div>
            </div>

          


        </div>
        

      </div>
    </body>

  )
}
