import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

import MethodSwitchComponent from "../methodSwitchComponent/methodSwitchComponent";

import PhoneNumberInputField from "../phoneNumberInputField/phoneNumberInputField";
import PasswordInputField from "../passwordInputField/passwordInputField";

import AuthModalButton from "../authModalButton/authModalButton";
import { passwordInputType } from "../passwordInputField/passwordInputFieldWithoutLabel";
import { E164Number } from "libphonenumber-js/types";



const defaultFormFields={
    password:"",   
    email:"",
}

const LoginScreenTwo =()=> {

    const [formFields, setFormFields]= useState(defaultFormFields)
    const {password, email} = formFields

    const change =(e)=>{
     const {name, value} = e.target;
     setFormFields({...formFields, [name]:value})
    }


    const loginUser = async()=>{
   try {
    const response =await fetch("https://api.lykluk.com:8080/auth/signin", {
        method: "POST",
      
          body:JSON.stringify({
            username:email,
          password: password,
          app_token: "jskhfisofsij" 
          }),
        
        headers: {
          "Content-Type": "application/json"
        },
        redirect: 'follow'
       
       })
     console.log(response)
   } catch (error) {
    console.log(error)
   }
    }

const [phoneNumber, setPhoneNumber] =useState(true)

const switchContent=()=>{
    setPhoneNumber(!phoneNumber)
}
   
 const gotoForgetPassword =()=>{
    navigate("/forgotPassword", {replace:true})
 }

    const navigate = useNavigate()
    const gotoSignup =()=>{
      navigate("/signup", { replace: true });
    }

    
    const [phoneField, setPhoneField] = useState("")
    // const onPhoneInputChange =()=>{
    //     setPhoneField(phoneField)
    // }
  
    return (
        <>
            
                <MethodSwitchComponent 
                option1="Phone Number"
                option2="Email"
                switchContent={switchContent}></MethodSwitchComponent>
              
                <div className="flex flex-col relative text-[15px] mb-[3rem]">
    
               {phoneNumber ? 
               <div className="w-[85%] m-auto">
                
                
                <PhoneNumberInputField 
                changeFunction={setPhoneField}
                value={phoneField}></PhoneNumberInputField>
                
                
                <PasswordInputField 
                type={passwordInputType.password}
                changeFunction={change}
                value={password}
                ></PasswordInputField>
               
               </div>
               
                : 
                <div className="w-[85%] m-auto">
                <label>Email</label>
                <input type="email" 
                name="email"
                value={email}
                onChange={change}
                className="w-full border py-2 rounded my-2 px-2"
                placeholder="Enter your email"/>
                <PasswordInputField 
                type={passwordInputType.password}
                changeFunction={change}
                value={password}></PasswordInputField>
               </div>
                }
               <div className="w-[85%] m-auto mt-[0.2rem]">
               <div className="flex justify-between mt-[1.3rem]">
                    <div className="flex items-center">
                        <input type="checkbox" name="" id="" className="rounded"/>
                        <span className="ml-[0.6rem]">Remember Me</span> </div>
                    <div><span className="text-primary cursor-pointer" onClick={gotoForgetPassword}>Forgot Password</span></div>
                </div>
                <div className="mt-[2.5rem]">
                <AuthModalButton content="Log in" onClickFunction={loginUser}></AuthModalButton>
                </div>
              
               </div>
               
                    
                </div>
                <hr  className="bg-loginLinkPartition h-[1px] border-none mb-2"/>
                <p className="text-center text-[14px]">Don't have an account? 
                <span onClick={gotoSignup} className="text-primary cursor-pointer"> Sign Up</span> </p>
                
               
           
        </>
    )
}

export default LoginScreenTwo