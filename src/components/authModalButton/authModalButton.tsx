import React from 'react'

type AuthModalButtonPropsType={
    content:string;
    onClickFunction?:()=>void;
}
const AuthModalButton =({content, onClickFunction}:AuthModalButtonPropsType)=> {
  return (
    <button className="text-white w-full rounded py-[0.5rem] bg-primary"
    onClick={onClickFunction}>{content}</button>
  )
}

export default AuthModalButton