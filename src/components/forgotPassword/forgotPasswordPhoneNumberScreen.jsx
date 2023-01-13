import React from 'react'

import AuthModalInputElement from '../authModalInputElement/authModalInputElement'
import AuthModalButton from '../authModalButton/authModalButton'
import { useNavigate } from 'react-router-dom'

const ForgotPasswordPhoneNumberScreen =()=> {

 
    const navigate = useNavigate()
    const gotoSignup =()=>{
      navigate("/signup", { replace: true });
    }


  return (
   <>
 
   <div className='mb-[2rem]'>
      <p className='text-center font-bold text-[14px] mt-[2.5rem] mb-[1rem]'>Change Password</p>
      <div className='relative'>
        <span 
        className='absolute text-primary right-[2rem] top-[50%] translate-y-[-50%] underline font-medium text-[13px] cursor-pointer'>
            Send code</span>
      <AuthModalInputElement type='text' placeholder='SMS verification code'></AuthModalInputElement>
      </div>
      <AuthModalInputElement type='text' placeholder='New Password'></AuthModalInputElement>
      </div>
      <div className='w-[70%] m-auto mb-[9rem]'>
        <AuthModalButton content='Reset Password'></AuthModalButton>
      </div>
      <p className="text-center text-[14px]">Don't have an account? 
            <span onClick={gotoSignup} className="text-primary cursor-pointer"> Sign Up</span> </p>

   </>
  )
}

export default ForgotPasswordPhoneNumberScreen