import React from 'react'

const AuthModalInputElement =({type, placeholder})=> {
  return (
    <input type={type}  className="w-full border py-2 rounded my-[5px] px-2 focus:outline-none"
    placeholder={placeholder}/>
  )
}

export default AuthModalInputElement