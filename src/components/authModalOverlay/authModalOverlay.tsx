import React from 'react'
type AuthModalOverlayPropsType ={
  closeModal:()=>void
}
const  AuthModalOverlay =({closeModal}:AuthModalOverlayPropsType)=> {
  return (
    <div className='absolute w-full top-0 left-0 h-full z-[52] opacity-30 blur bg-[black]'
    onClick={closeModal}></div>
  )
}

export default AuthModalOverlay