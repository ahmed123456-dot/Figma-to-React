import React from 'react'
import frame from '../Header/images/Frame.png';
import frame1 from '../Header/images/Frame1.png';

export const Slider = () => {
  return (
  <div className="container-fluid">
   <div id="carouselExampleFade" class="carousel slide carousel-fade my-4" >
   <div class="carousel-inner"  >
     <div class="carousel-item active" >
       <img src={frame} class="d-block w-100" alt="..." width={100} height='500px' />
     </div>
     <div class="carousel-item">
       <img src={frame1} class="d-block w-100" alt="..." width={100} height='500px'/>
     </div>
     <div class="carousel-item">
       <img src="..." class="d-block w-100" alt="..." width={100} height='500px'/>
     </div>
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
   </div>
   </div>
  
  )
}
