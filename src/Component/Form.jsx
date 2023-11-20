import React from 'react'
import { BiSolidUser, BiSolidEnvelope, BiSolidLockAlt } from "react-icons/bi";
import { HiKey } from "react-icons/hi";


const Form = () => {
  return (
    <div className="container-fluid  py-4">
      <div className="row">
        <div className="col-sm-12 col-lg-6 text-center hero">
          
          

          <form className='text-white' autoComplete='off' >
          <h1>Sign up</h1>
          <div className='main'> 
          <div className='icon'><BiSolidUser /></div>
           <div className="input-group mt-4">
              <input type="text" id="name" required />
              <label for="name">Your Name</label>
            </div>
            </div>
            <div className='main'> 
          <div className='icon'><BiSolidEnvelope /></div>
           <div className="input-group mt-4">
              <input type="text" id="email" required />
              <label for="email">Your Email</label>
            </div>
            </div>
            <div className='main'> 
          <div className='icon'><BiSolidLockAlt /></div>
           <div className="input-group mt-4">
              <input type="password" id="Password" required />
              <label for="Password">Password</label>
            </div>
            </div>
            <div className='main'> 
          <div className='icon'><HiKey /></div>
           <div className="input-group mt-4">
              <input type="password" id="Repeat Password" required />
              <label for="Repeat Password">Repeat your password</label>
            </div>
            </div>
            <button type='submit'><span>Register</span><i></i></button>
          </form>
        </div>
        <div className="col-sm-12 col-lg-6  rounded-3 text-lg-end py-5 right-box">
          <div className='featured-image'>
            <img src="./images/draw1.webp" className='img-fluid mt-5 pt-3 ' alt="" />
            </div>
        </div>
      </div>
    </div>

  )
} 

export default Form
