import React from 'react'

export const Carts = () => {
    const cart = [
        {
            name: "Apple MacBook Pro",
            price: 1999,
            qty: 2,
            image: "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?t=st=1745005696~exp=1745009296~hmac=9870338dd100d4da1cac7f1ab8c6ddf783158f1400ca16cd9db489ade69d6afa&w=1380"


        },
        {
            name: "Samsung Galaxy S23",
            price: 899,
            qty: 3,
            image: "https://img.freepik.com/free-photo/clay-phone-16-pro-max_187299-45890.jpg?t=st=1745007868~exp=1745011468~hmac=6f2e136c747d00d6906b459ff1873c35ef27793b94a8872fb65e59a9c39d9574&w=1380"

        },
        {
            name: "Sony WH-1000XM5",
            price: 349,
            qty: 4,
            image: "https://img.freepik.com/free-photo/top-view-earphones-music-concept_23-2148605791.jpg?t=st=1745007950~exp=1745011550~hmac=da1c78cd6d2259f7756722b31424921a706bcb4ec8b0f95271db4cf442d4b851&w=900"

        },
    ];
    return (
        <div className='container my-5'>
            <div className='d-flex justify-content-start'>
                <a href="/" className='me-4' style={{textDecoration:'none', color:'darkgray',fontSize:'18px'}}>Home</a>
                <p className='me-4'>/</p>
                <a href="/Cart"  style={{textDecoration:'none', color:'black',fontSize:'18px'}}>Checkout</a>
             </div>
            <div className='my-5' style={{

                color: 'black',


                padding: '15px',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',

            }}>
                <div className='d-flex justify-content-around'>
                    <h5 className='' style={{ textDecoration: 'none', fontSize: '18px' }}>Products</h5>
                    <h5 className='' style={{ textDecoration: 'none', fontSize: '18px' }}></h5>

                    <h5 style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Price</h5>
                    <h5 style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Quantity</h5>
                    <h5 style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Subtotal</h5>
                </div>
            </div>
            {cart.map((list, index) => (
                <div className='my-4' key={index} style={{

                    color: 'black',


                    padding: '15px',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',

                }}>
                    <div className='d-flex justify-content-around ' style={{ alignContent: 'center', alignItems: 'center' }}>
                        <div className='d-flex justify-content-around' style={{ alignContent: 'center', alignItems: 'center' }}>
                            <img className=' me-4' src={list.image} alt="" style={{ height: '50px', width: '60px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h5 style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>{list.name}</h5>
                        </div>

                        <h5 style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>${list.price}.00</h5>
                        <h5 style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>{list.qty}</h5>
                        <h5  style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>${list.price * list.qty}.00</h5>
                    </div>
                </div>

            ))}

            <div >

                <div className='d-flex justify-content-end '>
                    <div className='my-5' style={{ border: '1px solid black', padding: '20px', width: '350px' }}>
                        <div >
                            <h5 style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Cart Total</h5>
                        </div>
                        <div className='d-flex justify-content-between my-3 '>
                            <p style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>Subtotal : </p>
                            <p style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>$900.00</p>
                        </div>
                        <hr />
                        <span className='d-flex justify-content-between '>
                            <p style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>Pay : </p>
                            <p style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>Card</p>
                        </span>
                        <hr />
                        <div className='d-flex justify-content-between '>
                            <p style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>Total : </p>
                            <p style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}>$900.00</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href="/Details" style={{ color: 'white', background: 'crimson', padding: '12px 25px', textDecoration: 'none' }} className='my-2'>
                                Procees to checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
