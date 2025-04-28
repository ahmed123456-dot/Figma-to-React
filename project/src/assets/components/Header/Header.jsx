import  { useContext } from 'react'

import '../Header/Header.css'




export const Header = () => {
  return (
    
   
    <body>
    <div className='container-fluid w-100' >
  <nav class="navbar navbar-expand-lg bg-light" style={{padding:'20px'}}>
<div class="container-fluid">
<h2 className=" text-start me-5">Exclusive</h2>

  
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li class="nav-item">
        <a class="nav-link me-4" href="/"  style={{fontSize:'18px'}}>Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link me-4" href="Products" style={{fontSize:'18px'}}>Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link me-4" href="/Cart" style={{fontSize:'18px'}}>Carts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link me-4" href="/Contact" style={{fontSize:'18px'}}>Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link me-4" href="#" style={{fontSize:'18px'}}>About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link me-4" href="/Signup" style={{fontSize:'18px'}}>Signup</a>
      </li>
      
    
    </ul>
    <form class="d-flex me-4" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <i class="fa-solid fa-magnifying-glass my-2" type="submit" style={{fontSize:'20px'}}></i>
    </form>
    <div className="d-flex my-2">
    <i class="fa-solid fa-cart-shopping my-2" type="submit" style={{fontSize:'20px'}}>
    
    </i>
    
    </div>
  </div>
</div>

</nav>

</div>
    </body>
   
 
  )
}
