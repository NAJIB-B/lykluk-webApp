
import MethodSwitchComponent from "../methodSwitchComponent/methodSwitchComponent"
import { ChangeEvent, useState } from "react"

import PhoneNumberInputFieldWithoutLabel from "../phoneNumberInputField/phoneNumberInputFieldWithoutLabel"
import PasswordInputFieldWithoutLabel from "../passwordInputField/passwordInputFieldWithoutLabel"
import AuthModalButton from "../authModalButton/authModalButton"


const SignUpScreenTwo =()=> {

    const [phoneNumber, setPhoneNumber] =useState<boolean>(true)

const switchContent=()=>{
    setPhoneNumber(!phoneNumber)
}

const me =(e: ChangeEvent<HTMLInputElement>)=>{
console.log(e.currentTarget.value)
}

  return (
    <>
        
            <MethodSwitchComponent option1="Phone Number" option2="Email" switchContent={switchContent}></MethodSwitchComponent>
             
            <div className="w-[85%] m-auto">
                
             <label>What's your Name ?</label>
             <input type="text" className="w-full border py-2 px-2 rounded my-2 focus:outline-none"/>
             <label>What's your Birthday ?</label>
             
                <input type="date" name="" id=""  onChange={me}
                className="w-full border py-2 px-2 rounded my-2 focus:outline-none"/>
                <span className="text-[10px] block">This information won't be made public</span>
                {phoneNumber? <PhoneNumberInputFieldWithoutLabel></PhoneNumberInputFieldWithoutLabel>
                :
                <input type="email"  className="w-full border py-2 rounded my-[5px] px-2"
                placeholder="Enter your email"/>}
              
                
                <PasswordInputFieldWithoutLabel></PasswordInputFieldWithoutLabel>
              
                <div className="flex">

                <input type="checkbox" name="" id=""  /> 
                <p className="text-[12px] ml-2">Get trending content, newsletters, promotions, recommendations and 
                    account updates sent to your email
                </p>
                </div>
                <div className="mt-[0.8rem]">
                <AuthModalButton content="Continue"></AuthModalButton>
                </div>
                
                <p className="text-[12px] text-center mt-1">
                    By continuing you agree to LYKLUK's terms of service and confirm that you have read TikTok's 
                    privacy policy
                </p>
            </div>
            
           
        
    </>
  )
}

export default SignUpScreenTwo