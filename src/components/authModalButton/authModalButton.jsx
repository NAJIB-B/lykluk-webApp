import React from 'react'


const AuthModalButton =({content, onClickFunction})=> {
  return (
    <button className="text-white w-full rounded py-[0.5rem] bg-primary"
    onClick={onClickFunction}>{content}</button>
  )
}

export default AuthModalButton