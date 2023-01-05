
import AuthModalInputElement from '../../components/authModalInputElement/authModalInputElement'

import PhoneNumberInputFieldWithoutLabel from '../../components/phoneNumberInputField/phoneNumberInputFieldWithoutLabel'
import AuthModalButton from '../authModalButton/authModalButton'

import { useNavigate } from 'react-router-dom'
import {useState} from "react"
import { E164Number } from 'libphonenumber-js/types'

type ForgotPasswordScreenOnePropsType ={
    nextPageFunction:()=>void;
    email:boolean;
    switchMethod:()=>void;
}

function ForgotPasswordScreenOne({nextPageFunction, email, switchMethod}:ForgotPasswordScreenOnePropsType) {

    const navigate = useNavigate()
    const gotoSignup =()=>{
      navigate("/signup", { replace: true });
    }

 
    const phoneNumberField:E164Number|undefined =""
    const [phoneField, setPhoneField] = useState<E164Number | undefined>(phoneNumberField)

    const onPhoneInputChange =()=>{
      setPhoneField(phoneField)
  }


  return (
    <>
    
    
        <div>
            <p className='text-center font-bold text-[14px] mt-[2.5rem] mb-[1rem]'>Change Password</p>
            {email?
           <AuthModalInputElement type='email' placeholder='Email'></AuthModalInputElement> :
           <PhoneNumberInputFieldWithoutLabel 
           changeFunction={onPhoneInputChange}
           value={phoneField}></PhoneNumberInputFieldWithoutLabel>
        }
        <p className='text-primary text-[12px] text-right underline cursor-pointer' onClick={switchMethod}>
            {email?"Use Phone Number":"Use email"}
        </p>
            
        </div>
        <div className='w-[70%] m-auto mt-[2rem] mb-[9rem]'>
            <AuthModalButton content='Continue' onClickFunction={nextPageFunction}></AuthModalButton>
        </div>
        <p className="text-center text-[14px]">Don't have an account? 
            <span onClick={gotoSignup} className="text-primary cursor-pointer"> Sign Up</span> 
            </p>
   
    </>
  )
}

export default  ForgotPasswordScreenOne