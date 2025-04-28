import React from 'react'

export const Product = () => {
    const products = [
        {
            id:1,
          name: "Apple MacBook Pro",
          price: 1999.99,
          description: "14-inch laptop with Apple M2 chip, Retina display, and all-day battery life.",
          image: "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?t=st=1745005696~exp=1745009296~hmac=9870338dd100d4da1cac7f1ab8c6ddf783158f1400ca16cd9db489ade69d6afa&w=1380"
        },
        {
            id:2,
          name: "Samsung Galaxy S23",
          price: 899.99,
          description: "Flagship Android smartphone with stunning display and powerful performance.",
          image: "https://img.freepik.com/free-photo/clay-phone-16-pro-max_187299-45890.jpg?t=st=1745007868~exp=1745011468~hmac=6f2e136c747d00d6906b459ff1873c35ef27793b94a8872fb65e59a9c39d9574&w=1380"
        },
        {
            id:3,
          name: "Sony WH-1000XM5",
          price: 349.99,
          description: "Industry-leading noise canceling wireless headphones with up to 30 hours of battery life.",
          image: "https://img.freepik.com/free-photo/top-view-earphones-music-concept_23-2148605791.jpg?t=st=1745007950~exp=1745011550~hmac=da1c78cd6d2259f7756722b31424921a706bcb4ec8b0f95271db4cf442d4b851&w=900"
        },
        {
            id:4,
          name: "Canon EOS R50",
          price: 679.99,
          description: "Compact mirrorless camera with 24.2MP APS-C sensor and 4K video recording.",
          image: "https://img.freepik.com/free-photo/separated-objective-camera_140725-8073.jpg?t=st=1745008030~exp=1745011630~hmac=50609d083cf2bb3b2ddf656e12865f9ef82ff0afb9b80ebdc6105733592e5776&w=740"
        },
        {
            id:5,
          name: "LG 55\" OLED TV",
          price: 1299.99,
          description: "Stunning 4K OLED TV with perfect blacks, vibrant colors, and Dolby Vision support.",
          image: "https://img.freepik.com/free-photo/view-3d-young-child-watching-movie_23-2151069420.jpg?t=st=1745008083~exp=1745011683~hmac=7693001cf1aa6812a6bf3257f689df025cfc237e4e0fa9674d4027221571c5d0&w=1380"
        },
        {
            id:6,
          name: "Apple Watch Series 9",
          price: 399.99,
          description: "Latest smartwatch with fitness tracking, ECG, and seamless iPhone integration.",
          image: "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-97321.jpg?t=st=1745008118~exp=1745011718~hmac=f5a265b87ca0643b81f506404e31ef3c766baa412a2893fbffc1904107e3df87&w=1380"
        },
        {
            id:7,
          name: "DJI Mini 3 Drone",
          price: 599.99,
          description: "Ultra-lightweight drone with 4K HDR video and 38 minutes of flight time.",
          image: "https://img.freepik.com/free-photo/various-hi-tech-devices-table_140725-9010.jpg?t=st=1745008973~exp=1745012573~hmac=6e947f7ac74e57de31ea0cc8157611bbab8843a488649011cf962fed3b1c5321&w=1380"
        },
        {
            id:8,
          name: "Bose Smart Soundbar",
          price: 849.99,
          description: "Premium soundbar with Dolby Atmos, Alexa built-in, and room-filling sound.",
          image: "https://img.freepik.com/free-photo/speakers-with-extremely-high-volume-desk_23-2149625153.jpg?t=st=1745009033~exp=1745012633~hmac=0720e4f4907d7d0070f0f3a3e759fb8d46b44a2c51fc9a206dbff7647ea966b5&w=1380"
        }
      ];
      const electronicsItems = [
       
        { name: "Laptop" },
        { name: "Smartphone" },
        { name: "Tablet"},
        { name: "Camera" },
        { name: "Television" },
        
    
      ];
  return (
    <body>
        <div className="container my-4 ">
        
        <div className="row">
        <div className="d-flex justify-content-start my-3">
            <div className='me-3' style={{background:'crimson', width:'18px', height:'40px', borderRadius:'5px'}}></div>
            <h5 className="my-2 " style={{ fontSize: '16px', fontWeight: 'bold', color: 'crimson' }}>Our Products</h5>

          </div>
          <h2 className=" text-start  text-uppercase ">All New Products</h2>
          <div  className="col-xl-2 col-lg-2 col-md-4 col-sm-8 my-4 ">
              <div className="" style={{ height: "40px", width: "180px",  border:'2px solid orange', borderColor:'orange',borderRadius:'20px',padding:'6px',background:'crimson'}}>
               
                 
                  <p className="card-title text-center" style={{ fontSize: '15px', fontWeight: 'bold', textTransform: 'uppercase',color:'white' }}>All</p>

                
              </div>
            </div>
          {electronicsItems.map((list, index) => (
            <div key={index} className="col-xl-2 col-lg-2 col-md-4 col-sm-8 my-4 ">
              <div className="" style={{ height: "40px", width: "180px",  border:'2px solid orange', borderColor:'orange',borderRadius:'20px',padding:'6px'}}>
               
                 
                  <p className="card-title text-center" style={{ fontSize: '15px', fontWeight: 'bold', textTransform: 'uppercase',color:'crimson' }}>{list.name}</p>

                
              </div>
            </div>
          ))}


        </div>
      </div>
    
    <div className="container my-4" >
    <div className="row">
<hr/>
      

      {products .sort((a, b) => b.id - a.id).map((list, index) => (
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
              <a href="/Details">  <i className='fa-solid fa-cart-shopping' style={{ fontSize: '20px' ,color:'black'}}></i></a>
              </div>

              <p className=" text-start card-text " style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>Price :  ${list.price}</p>
              <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i>                      </div>




          </div>
        </div>

      ))}


    </div>
    <nav aria-label="..." >
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <i class="fa-solid fa-backward page-link" style={{fontSize:'24px'}}></i>
    </li>
    <li class="page-item"><a class="page-link" href="#" style={{ color:'orange'}}>1</a></li>
    <li class="page-item " aria-current="page" style={{background:'crimson'}} >
      <span class="page-link" style={{background:'crimson', color:'orange'}}>2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#" style={{ color:'orange'}}>3</a></li>
    <li class="page-item">
    <i class="fa-solid fa-forward page-link" style={{fontSize:'24px' ,color:'crimson'}}></i>
    </li>
  </ul>
</nav>
  </div >
  </body>
  )
}
