
import MethodSwitchComponent from "../methodSwitchComponent/methodSwitchComponent"
import { ChangeEvent, useState } from "react"

import PhoneNumberInputFieldWithoutLabel from "../phoneNumberInputField/phoneNumberInputFieldWithoutLabel"
import PasswordInputFieldWithoutLabel, { passwordInputType } from "../passwordInputField/passwordInputFieldWithoutLabel"
import AuthModalButton from "../authModalButton/authModalButton"
import { E164Number } from 'libphonenumber-js/types'



const defaultFormFields ={
    name:"",
    dob:"",
    email:"",
    password:"",
    confirmPassword:"",
    terms:true,
    
}

const SignUpScreenTwo =()=> {

    const [formFields, setFormFields] = useState(defaultFormFields)
    
    const [phoneField, setPhoneField] = useState("")

   

    const {name, dob, email, password, confirmPassword, terms} = formFields;

    const [phoneNumber, setPhoneNumber] =useState(true)
   
   
    const [nameError, setNameError] = useState(false)
    const [dobError, setDobError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    // to check if password and confirm password is the same
    const [equalPasswordError, setEqualPasswordError] = useState(false)
    const [termsError, setTermsError] = useState(false)
    const [phoneNumberError, setPhoneNumberError] = useState(false)
   
    const validate =()=>{
      
        if(!name.trim()){
            setNameError(true)
           return
        }else{
            setNameError(false)
        }
      
        if(!dob.trim()){
            setDobError(true)
           return
        }else{
            setDobError(false)
        }

     
        if(
            !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)
        ){
            setEmailError(true)
            return
        }else{
            setEmailError(false)
        }

        if(!password.trim()){
            setPasswordError(true)
            return
         }else{
            setPasswordError(false)
        }

        if(!confirmPassword.trim()){
            setConfirmPasswordError(true)
            return
         }else{
            setConfirmPasswordError(false)
        }
        if(password !== confirmPassword){
            setEqualPasswordError(true)
            return
         }else{
            setEqualPasswordError(false)
        }
        if(!terms){
           setTermsError(true)
           return
        }else{
            setTermsError(false)
        }
        signupUser()
        
    }
  

    const signupUser = async ()=>{
        validate();
        try {
            const response =await fetch("https://api.lykluk.com:8080/auth/signup", {
                  method: "POST",
                
                    body:JSON.stringify({
                        name: name,
                        dob:dob,
                        password:password,
                        email: email,
                        terms:terms,
                        app_token: "jskhfisofsij",
                    }),
                  
                  headers: {
                    "Content-Type": "application/json"
                  },
                  redirect: 'follow'
                 
                 })
          
        
            const value =  response.json()
            console.log(value)
        } catch (error) {
            
        }
    }

const switchContent=()=>{
    setPhoneNumber(!phoneNumber)
}


const change =(e)=>{
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
             {nameError? <p className="text-[12px] text-red">please input a name</p> : ""}
             <label>What's your Birthday ?</label>
             
                <input type="date"  
                onChange={change}
                name="dob"
                value={dob}
                className="w-full border py-2 px-2 rounded my-2 focus:outline-none"/>
                {dobError? <p className="text-[12px] text-red">please input a date</p> : ""}
                <span className="text-[10px] block">This information won't be made public</span>
                {phoneNumber? 
                <>
                
                <PhoneNumberInputFieldWithoutLabel 
                changeFunction={setPhoneField}
                value={phoneField}></PhoneNumberInputFieldWithoutLabel>
                {phoneNumberError? <p className="text-[12px] text-red">please input a valid phone number</p> : ""}
                </>
                :
                <>
                 <input 
                type="email"
                name="email"
                value={email}
                onChange={change}

                  className="w-full border py-2 rounded my-[5px] px-2"
                placeholder="Enter your email"/>
                {emailError? <p className="text-[12px] text-red">please input a valid email</p> : ""}
                </>
               }
              
                
                <PasswordInputFieldWithoutLabel type={passwordInputType.password}
                changeFunction={change}
                value={password}></PasswordInputFieldWithoutLabel>
                {passwordError? <p className="text-[12px] text-red">please input a password</p> : ""}
                <PasswordInputFieldWithoutLabel type={passwordInputType.confirmPassword}
                changeFunction={change}
                value={confirmPassword}></PasswordInputFieldWithoutLabel>
                {confirmPasswordError? <p className="text-[12px] text-red">please confirm your password</p> : ""}
              
                {equalPasswordError? <p className="text-[12px] text-red">please make sure the password and confirm password are the same</p> : ""}
              
                <div className="flex">

                <input type="checkbox" name="terms" checked={terms} onChange={change} /> 
                
              
                <p className="text-[12px] ml-2">Get trending content, newsletters, promotions, recommendations and 
                    account updates sent to your email
                </p>
                
                </div>
                {termsError? <p className="text-[12px] text-red">please accept terms</p> : ""}
                <div className="mt-[0.8rem]">
                <AuthModalButton content="Continue" onClickFunction={validate}></AuthModalButton>
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