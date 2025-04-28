import React from 'react'
import frame from '../Signup/images/Signup.png';

export const Login = () => {
  return (
    <div className="container my-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 me-4">
                        <img src={frame} class="d-block w-100" alt="..." style={{ width: '100%', height: '500px' }} />
                    </div>
                    <div className="col-xl-5 col-lg-8 m-4" style={{ alignContent: 'center', alignItems: 'center' }}>
    
                        <h4 className="text-start " style={{ fontSize: '35px', }}>Log in in to Exclusive</h4>
                        <p className="text-start my-2" style={{ fontSize: '16px', }}>Enter your details below</p>
                        
                            <input type="text" className='form-control text-start my-4' placeholder='E-Mail or Phone Number' style={{ border: 'none', borderBottom: '1px solid black', borderRadius: 0, width: '350px' }} />
                            <input type="text" className='form-control text-start my-4' placeholder='Password' style={{ border: 'none', borderBottom: '1px solid black', borderRadius: 0, width: '350px' }} />
                            <div className="d-flex justify-content-start my-4">
                                <button className="btn btn-danger  W-100 me-4" style={{ width:100  }}>Log in</button>
                                <a className="text-start my-3 " href='' style={{ fontSize: '14px', color:'crimson',textDecoration:'none'}}>Forget Password?</a>
                        
                            </div>
                            
    
                    </div>
    
                </div>
            </div>
  )
}
