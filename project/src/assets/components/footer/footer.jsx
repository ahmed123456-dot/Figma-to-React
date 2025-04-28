import React from 'react'

export const Footer = () => {
  return (
    <footer>
    <div className="container-fluid my-4 " style={{height: '400px',background:'black',padding:'30px'}}>
    <div className="d-flex justify-content-between ">
           <div>
           <h2 className=" text-white text-start m-4 ">Exclusive</h2>
           <h4 className=" text-white text-start m-4">Subscribe</h4>
           <p className=" text-white text-start m-4">Get 10% off your first order</p>
           <div className='d-flex justify-content-start m-4'>
           <input class="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search" style={{background:'black',color:'lightgray',}} />
           <i class="fa-solid fa-share my-2" type="submit" style={{fontSize:'20px', color:'white'}}></i>
           </div>
           </div>
           <div>
           <h4 className=" text-white text-start m-4 ">Support</h4>
           <h6 className=" text-white text-start m-4">111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh </h6>
           <h6 className=" text-white text-start m-4">exclusive@gmail.com</h6>
           <h6 className=" text-white text-start m-4">+88015-88888-9999</h6>
           
           </div>
           <div>
           <h4 className=" text-white text-start m-4 ">Account</h4>
          
           <h6 className=" text-white text-start m-4">My Account </h6>
           <h6 className=" text-white text-start m-4">Login / Resgister</h6>
           <h6 className=" text-white text-start m-4">Cart</h6>
           <h6 className=" text-white text-start m-4">Wishlist</h6>
           <h6 className=" text-white text-start m-4">Shop</h6>
           </div>
          
           <div>
           <h4 className=" text-white text-start m-4 ">Quick Link</h4>
          
           <h6 className=" text-white text-start m-4">Privicy Policy </h6>
           <h6 className=" text-white text-start m-4">Terms Of Use</h6>
           <h6 className=" text-white text-start m-4">FAQS</h6>
           <h6 className=" text-white text-start m-4">Contacts</h6>
          
           </div>
           <div>
           <h4 className=" text-white text-start m-4 ">Download Apps</h4>
          
           <p className=" text-white text-start m-4 " style={{fontSize:'13px',color:'darkgray'}}>Save $3 With App New User Only </p>
           <div className="d-flex justify-content-around ">
           <i className='fa-brands fa-facebook-f ' style={{ fontSize: '24px', color: 'white' }}></i>
           <i className='fa-brands fa-instagram ' style={{ fontSize: '24px', color: 'white' }}></i>
           <i className='fa-brands fa-twitter ' style={{ fontSize: '24px', color: 'white' }}></i>
           <i className='fa-brands fa-linkedin-in ' style={{ fontSize: '24px', color: 'white' }}></i>


           </div>
          
           </div>
          </div>
          <div>
          <hr style={{color:'lightgray'}}/>

<p className='text-center' style={{color:'darkgray',}} >@Copyright Rimel 2022. All right reserved</p>
          </div>
         
          
    </div>
    </footer>
  )
}
