import React from 'react'

export const Contacts = () => {
    return (
        <div className='container my-5'>
             <div className='d-flex justify-content-start'>
                <a href="/" className='me-4' style={{textDecoration:'none', color:'darkgray',fontSize:'18px'}}>Home</a>
                <p className='me-4'>/</p>
                <a href="/Contact"  style={{textDecoration:'none', color:'black',fontSize:'18px'}}>Contact</a>
             </div>
        <div className="container my-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 my-4">
                    <div style={{
                        width: '300px',
                        color: 'black',


                        padding: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                        borderRadius: '10px'
                    }}>
                        <div>
                            <div className='d-flex justify-content-start'>
                                <div className='me-3 ' style={{ background: 'crimson', padding: '10px', borderRadius: '50%', width: '50px', height: '50px' }}>
                                    <i className='fa-solid fa-phone' style={{ fontSize: '28px', color: 'white', alignItems: 'center', alignContent: 'center', justifyContent: 'center', display: 'flex' }}></i>
                                </div>
                                <p className=" text-center fw-bold  my-2" style={{ fontSize: '18px' }}>Call To Us</p>
                            </div>
                            <p className="    my-2" style={{ fontSize: '16px' }}>We are avalible 24/7, 7 days a week.</p>
                            <p className="   my-2" style={{ fontSize: '16px' }}>Phone : +92 322 2062319</p>
                        </div>
                        <hr className='my-4' />
                        <div>
                            <div className='d-flex justify-content-start'>
                                <div className='me-3' style={{ background: 'crimson', padding: '10px', borderRadius: '50%', width: '50px', height: '50px' }}>
                                    <i className='fa-solid fa-envelope' style={{ fontSize: '28px', color: 'white', alignItems: 'center', alignContent: 'center', justifyContent: 'center', display: 'flex' }}></i>
                                </div>
                                <p className=" text-center fw-bold  my-2" style={{ fontSize: '18px' }}>Write To US</p>
                            </div>
                            <p className="    my-2" style={{ fontSize: '16px' }}>Fill out our form and we will contact<br /> you within 24 hours.</p>
                            <p className="   my-2" style={{ fontSize: '16px' }}>E-Mail : customer@exclusive.com</p>
                            <p className="   my-2" style={{ fontSize: '16px' }}>E-Mail : support@exclusive.com</p>
                        </div>



                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 my-4">
                    <div style={{
                        width: '700px',
                        color: 'black',


                        padding: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                        borderRadius: '10px'
                    }}>

                        <form action="">
                            <div className='d-flex justify-content-around'>
                                <input className='form-control me-2' placeholder='Your Name *' type="text" style={{ border: 'none', background: 'lightgray' }} />
                                <input className='form-control me-2' placeholder='Your E-Mail *' type="email" style={{ border: 'none', background: 'lightgray' }} />
                                <input className='form-control me-2' placeholder='Your Phone *' type="number" style={{ border: 'none', background: 'lightgray' }} />

                            </div>
                            <textarea className='form-control my-4' placeholder='Your Message *' type="number" style={{ border: 'none', background: 'lightgray', height: '200px', resize: 'none' }} />
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <a href="/Details" style={{ color: 'white', background: 'crimson', padding: '12px 25px', textDecoration: 'none' }} >
                                    Send Message
                                </a>
                            </div>
                        </form>




                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
