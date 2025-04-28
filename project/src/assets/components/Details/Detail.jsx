import React from 'react'

export const Detail = () => {
    const products = [
        {
          name: "Apple MacBook Pro",
          price: 1999.99,
          description: "14-inch laptop with Apple M2 chip, Retina display, and all-day battery life.",
          image: "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?t=st=1745005696~exp=1745009296~hmac=9870338dd100d4da1cac7f1ab8c6ddf783158f1400ca16cd9db489ade69d6afa&w=1380"
        },
        {
          name: "Samsung Galaxy S23",
          price: 899.99,
          description: "Flagship Android smartphone with stunning display and powerful performance.",
          image: "https://img.freepik.com/free-photo/clay-phone-16-pro-max_187299-45890.jpg?t=st=1745007868~exp=1745011468~hmac=6f2e136c747d00d6906b459ff1873c35ef27793b94a8872fb65e59a9c39d9574&w=1380"
        },
        {
          name: "Sony WH-1000XM5",
          price: 349.99,
          description: "Industry-leading noise canceling wireless headphones with up to 30 hours of battery life.",
          image: "https://img.freepik.com/free-photo/top-view-earphones-music-concept_23-2148605791.jpg?t=st=1745007950~exp=1745011550~hmac=da1c78cd6d2259f7756722b31424921a706bcb4ec8b0f95271db4cf442d4b851&w=900"
        },
        {
          name: "Canon EOS R50",
          price: 679.99,
          description: "Compact mirrorless camera with 24.2MP APS-C sensor and 4K video recording.",
          image: "https://img.freepik.com/free-photo/separated-objective-camera_140725-8073.jpg?t=st=1745008030~exp=1745011630~hmac=50609d083cf2bb3b2ddf656e12865f9ef82ff0afb9b80ebdc6105733592e5776&w=740"
        },
        {
          name: "LG 55\" OLED TV",
          price: 1299.99,
          description: "Stunning 4K OLED TV with perfect blacks, vibrant colors, and Dolby Vision support.",
          image: "https://img.freepik.com/free-photo/view-3d-young-child-watching-movie_23-2151069420.jpg?t=st=1745008083~exp=1745011683~hmac=7693001cf1aa6812a6bf3257f689df025cfc237e4e0fa9674d4027221571c5d0&w=1380"
        },
        {
          name: "Apple Watch Series 9",
          price: 399.99,
          description: "Latest smartwatch with fitness tracking, ECG, and seamless iPhone integration.",
          image: "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-97321.jpg?t=st=1745008118~exp=1745011718~hmac=f5a265b87ca0643b81f506404e31ef3c766baa412a2893fbffc1904107e3df87&w=1380"
        },
        {
          name: "DJI Mini 3 Drone",
          price: 599.99,
          description: "Ultra-lightweight drone with 4K HDR video and 38 minutes of flight time.",
          image: "https://img.freepik.com/free-photo/various-hi-tech-devices-table_140725-9010.jpg?t=st=1745008973~exp=1745012573~hmac=6e947f7ac74e57de31ea0cc8157611bbab8843a488649011cf962fed3b1c5321&w=1380"
        },
        {
          name: "Bose Smart Soundbar",
          price: 849.99,
          description: "Premium soundbar with Dolby Atmos, Alexa built-in, and room-filling sound.",
          image: "https://img.freepik.com/free-photo/speakers-with-extremely-high-volume-desk_23-2149625153.jpg?t=st=1745009033~exp=1745012633~hmac=0720e4f4907d7d0070f0f3a3e759fb8d46b44a2c51fc9a206dbff7647ea966b5&w=1380"
        }
      ];

    return (

        <div className="container my-4">
            <div className="row">
            <div className="d-flex justify-content-start my-3">
            <div className='me-3' style={{background:'crimson', width:'18px', height:'40px', borderRadius:'5px'}}></div>
            <h5 className="my-2 " style={{ fontSize: '16px', fontWeight: 'bold', color: 'crimson' }}>Details Products</h5>

          </div>
                <h3 className=" text-start  text-uppercase  ">Details Our Products</h3>



                <div className='container my-5'>
                    <div className='row'>
                        <div className="col-xl-6 col-lg-4">
                            <img
                                src='https://img.freepik.com/free-photo/speakers-with-extremely-high-volume-desk_23-2149625153.jpg?t=st=1745009033~exp=1745012633~hmac=0720e4f4907d7d0070f0f3a3e759fb8d46b44a2c51fc9a206dbff7647ea966b5&w=1380'
                                style={{ width: '95%', height: 450, objectFit: 'cover', }}
                                className="card-img-top me-4 "
                                alt="..."
                            />
                            <div className='d-flex justify-content-around my-3'>
                            <img
                                src='https://img.freepik.com/free-photo/woman-meditating-with-smart-speaker-high-angle_23-2149936254.jpg?t=st=1745171049~exp=1745174649~hmac=d20b77ebd5f639766fd9989f11e900a2b997e084ed808f2778b44632dd200a9c&w=1380'
                                style={{ width: '20%', height: 80, objectFit: 'cover', }}
                                className="card-img-top me-4 "
                                alt="..."
                            />
                             <img
                                src='https://img.freepik.com/free-photo/managing-smart-speakers-concept_23-2150170086.jpg?t=st=1745171083~exp=1745174683~hmac=ebe1c514b82291c4f5b55d435e51d3dcb4dbe2a72fbe7a977fe11bbe75622902&w=1380'
                                style={{ width: '20%', height: 80, objectFit: 'cover', }}
                                className="card-img-top me-4 "
                                alt="..."
                            />
                             <img
                                src='https://img.freepik.com/free-photo/woman-using-speaker-digital-assistant_23-2149108008.jpg?t=st=1745171118~exp=1745174718~hmac=ed2908fbd6c885a68ef9e421ffc72dc05d02b7609c02751d6ba2c5c5a7612236&w=1380'
                                style={{ width: '20%', height: 80, objectFit: 'cover', }}
                                className="card-img-top me-4 "
                                alt="..."
                            />
                             <img
                                src='https://img.freepik.com/free-photo/speakers-with-extremely-high-volume-desk_23-2149625153.jpg?t=st=1745009033~exp=1745012633~hmac=0720e4f4907d7d0070f0f3a3e759fb8d46b44a2c51fc9a206dbff7647ea966b5&w=1380'
                                style={{ width: '20%', height: 80, objectFit: 'cover', }}
                                className="card-img-top me-4 "
                                alt="..."
                            />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-10">
                            <div className=" text-start my-3">
                                <h5 className="" style={{ fontSize: '25px', }}>Bose Smart Soundbar</h5>

                                <div className="d-flex justify-content-start">
                                    <div className='me-4'>
                                        <i class="fa-solid fa-star" style={{ fontSize: '14px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i>

                                    </div>

                                    <span className='me-4'>|</span>   <p className="  " style={{ color: 'lightgreen', fontSize: '16px', fontWeight: 'bold' }}>In Stock</p>


                                </div>

                                <p className="me-4" style={{ fontSize: '25px', }}>$900.00</p>
                                <p className="me-5" style={{ fontSize: '15px', }}>A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China.</p>

                                <hr />

                                <div className="d-flex justify-content-start my-3">
                                    <div>
                                <p className="" style={{ fontSize: '25px', }}>Colors : </p>
                                </div>
                                    <div class="form-check m-2">
                                        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                                        <label class="form-check-label" for="radioDefault1">
                                            White
                                        </label>
                                    </div>
                                    <div class="form-check m-2">
                                        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2"  />
                                        <label class="form-check-label" for="radioDefault2">
                                            Black
                                        </label>
                                    </div>
                                </div>




                                <div className="d-flex align-items-center my-4">
                                    <div className="input-group" style={{ width: '120px' }}>
                                        <button className="btn btn-outline-secondary" ><i class="fa-solid fa-minus"></i></button>
                                        <input
                                            type="text"
                                            className="form-control text-center"

                                            readOnly
                                        />
                                        <button className="btn btn-danger" ><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                    <button className="btn btn-danger ms-3 W-100">Buy Now</button>
                                </div>

                                <div style={{ border: '1px solid black', width: '100%', height: '80px' }} >
                                    <div className="d-flex justify-content-start my-2" >
                                        <p className='me-4'></p>
                                        <i class="fa-solid fa-truck-fast my-3 me-4 " style={{ fontSize: '35px' }}></i>
                                        <div className='me-4'>
                                            <span style={{ fontSize: '22px', alignContent: 'center', }} >Free Delivery</span>
                                            <p style={{ textDecoration: 'underline', fontSize: '16px', }}>Enter your postal code for Delivery Availability</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ border: '1px solid black', width: '100%', height: '80px' }} >
                                    <div className="d-flex justify-content-start my-2" >
                                        <p className='me-4'></p>
                                        <i class="fa-solid fa-rotate-left my-3 me-4 " style={{ fontSize: '35px' }}></i>
                                        <div className='me-4'>
                                            <span style={{ fontSize: '22px', alignContent: 'center', }} >Return Delivery</span>
                                            <p style={{ textDecoration: 'underline', fontSize: '16px', }}>Free 30 Days Delivery Return. <span style={{ textDecoration: 'underline' }}>Details</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            








                        </div>
                    </div>
                </div>
                <div className="container my-5">
        <div className="row">
        <div className="d-flex justify-content-start my-3">
            <div className='me-3' style={{background:'crimson', width:'18px', height:'40px', borderRadius:'5px'}}></div>
            <h5 className="my-2 " style={{ fontSize: '16px', fontWeight: 'bold', color: 'crimson' }}>Related Products</h5>

          </div>
          

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
                    <a href="/Details">  <i className='fa-solid fa-cart-shopping' style={{ fontSize: '20px' ,color:'black'}}></i></a>
              </div>

                  <p className=" text-start card-text " style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>Price :  ${list.price}</p>
                  <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i> <i class="fa-solid fa-star" style={{ fontSize: '15px', color: 'orange' }} ></i>                      </div>




              </div>
            </div>

          ))}


        </div>
      </div>


            </div>
        </div>


    )
}
