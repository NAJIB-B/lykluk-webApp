
type AuthModalContainerPropsType ={
    children:React.ReactNode
}
const AuthModalContainer =({children}:AuthModalContainerPropsType)=> {
  return (
    <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-[53] md:w-[35%] w-[30%] rounded-[20px] p-5'>
        <div className="relative">

           {children}
        </div>
           
        </div>
  )
}

export default AuthModalContainer