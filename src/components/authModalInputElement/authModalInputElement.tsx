import React from 'react'
type AuthModalInputElementPropType ={
    type:string;
    placeholder:string;
}
const AuthModalInputElement =({type, placeholder}:AuthModalInputElementPropType)=> {
  return (
    <input type={type}  className="w-full border py-2 rounded my-[5px] px-2 focus:outline-none"
    placeholder={placeholder}/>
  )
}

export default AuthModalInputElement