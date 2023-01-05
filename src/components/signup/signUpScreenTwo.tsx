
import MethodSwitchComponent from "../methodSwitchComponent/methodSwitchComponent"
import { ChangeEvent, useState } from "react"

import PhoneNumberInputFieldWithoutLabel from "../phoneNumberInputField/phoneNumberInputFieldWithoutLabel"
import PasswordInputFieldWithoutLabel, { passwordInputType } from "../passwordInputField/passwordInputFieldWithoutLabel"
import AuthModalButton from "../authModalButton/authModalButton"
import { E164Number } from 'libphonenumber-js/types'

type DefaultFormFieldsTypes ={
    name:string;
    dob:string;
    email:string;
    password:string;
    terms:boolean;
    confirmPassword:string;
}


const defaultFormFields: DefaultFormFieldsTypes ={
    name:"",
    dob:"",
    email:"",
    password:"",
    confirmPassword:"",
    terms:true,
    
}

const SignUpScreenTwo =()=> {

    const [formFields, setFormFields] = useState<DefaultFormFieldsTypes>(defaultFormFields)
    const phoneNumberField:E164Number|undefined =""
    const [phoneField, setPhoneField] = useState<E164Number | undefined>(phoneNumberField)

   

    const {name, dob, email, password, confirmPassword, terms} = formFields;

    const [phoneNumber, setPhoneNumber] =useState<boolean>(true)



const switchContent=()=>{
    setPhoneNumber(!phoneNumber)
}


const change =(e: ChangeEvent<HTMLInputElement>)=>{
const {name, value} = e.target
if(name === "terms"){
    setFormFields({...formFields, terms:!terms})
    return
}
setFormFields({...formFields, [name]:value})
}

  return (
    <>
        
            <MethodSwitchComponent option1="Phone Number" option2="Email" switchContent={switchContent}></MethodSwitchComponent>
             
            <div className="w-[85%] m-auto">
                
             <label>What's your Name ?</label>
             <input 
             onChange={change}
             type="text" 
             name="name"
             value={name}
             className="w-full border py-2 px-2 rounded my-2 focus:outline-none"/>
             <label>What's your Birthday ?</label>
             
                <input type="date"  
                onChange={change}
                name="dob"
                value={dob}
                className="w-full border py-2 px-2 rounded my-2 focus:outline-none"/>
                <span className="text-[10px] block">This information won't be made public</span>
                {phoneNumber? 
                <PhoneNumberInputFieldWithoutLabel 
                changeFunction={setPhoneField}
                value={phoneField}></PhoneNumberInputFieldWithoutLabel>
                :
                <input 
                type="email"
                name="email"
                value={email}
                onChange={change}

                  className="w-full border py-2 rounded my-[5px] px-2"
                placeholder="Enter your email"/>}
              
                
                <PasswordInputFieldWithoutLabel type={passwordInputType.password}
                changeFunction={change}
                value={password}></PasswordInputFieldWithoutLabel>
                <PasswordInputFieldWithoutLabel type={passwordInputType.confirmPassword}
                changeFunction={change}
                value={confirmPassword}></PasswordInputFieldWithoutLabel>
              
                <div className="flex">

                <input type="checkbox" name="terms" checked={terms} onChange={change} /> 
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