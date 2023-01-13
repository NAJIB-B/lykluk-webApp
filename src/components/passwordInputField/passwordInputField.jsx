import { useState } from "react"
import eye from "./images/eye.svg"
import hiddenEye from "./images/hidden eye.svg"
import { ChangeEvent } from "react"
import { passwordInputType } from "./passwordInputFieldWithoutLabel"





const PasswordInputField =({type, changeFunction, value})=> {

 const [visible, setVisible] = useState(false);

const changeVisibility =()=>{
    setVisible(!visible)
}

  return (
    <div>
        <label>{type === passwordInputType.password ? "Password" : "Confirm Password"}</label>
    <div className="relative">
        {visible ? 
         <img src={hiddenEye} alt="hidden" className="absolute right-[0.8rem] w-[21px] top-[50%] translate-y-[-50%]"
         onClick={changeVisibility} ></img> :
         <img src={eye} alt="visible" className="absolute right-[0.8rem] w-[21px] top-[50%] translate-y-[-50%]" 
         onClick={changeVisibility} ></img>
        }
        <input type={visible? "text": "password"} 
        name={type === passwordInputType.password ? passwordInputType.password : passwordInputType.confirmPassword}
        value={value}
        onChange={changeFunction}
        placeholder={type === passwordInputType.password ? "Password" : "Confirm Password"}
        className="w-full border py-2 px-2 rounded my-2 focus:outline-none"/>
    </div>
    </div>
  )
}

export default PasswordInputField