
import user from "./images/user.svg"
import facebook from "./images/facebook.svg"
import google from "./images/google.svg"
import twitter from "./images/XMLID_1_.svg"
import { useNavigate } from "react-router-dom"


type ButtonObjectType={
  text:string;
  logo:string;
  logoDescription:string;
  function:()=>void;
}

type LoginScreenOnePropsType={
  userFunction:()=>void;
}

const LoginScreenOne=({userFunction}:LoginScreenOnePropsType)=> {
  const navigate = useNavigate()
  const gotoSignup =()=>{
    navigate("/signup", { replace: true });
  }
 const emptyFunction =()=>{
  console.log("empty")
 }
  const buttons:ButtonObjectType[] =[
     {
      text:"Use email/username",
      logo:user,
      logoDescription:"user",
      function:userFunction
     },
     {
      text:"Continue with Facebook",
      logo:facebook,
      logoDescription:"facebook",
      function:emptyFunction
     },
     {
      text:"Continue with Twitter",
      logo:twitter,
      logoDescription:"twitter",
      function:emptyFunction
     },
     {
      text:"Continue with Google",
      logo:google,
      logoDescription:"google",
      function:emptyFunction
     }
   
  ]
  return (
    <>
        
            <h5 className="text-center py-4">Log in to LYKLUK</h5>
            <div className="flex flex-col relative text-[15px] mb-[3rem]">

              {
                buttons.map((item)=>{
                  return(
                    <button 
                    className="m-auto border border-authPageButtonsBorder text-center w-[80%] relative py-1 rounded my-3"
                    onClick={item.function}>
                    <img src={item.logo} alt={item.logoDescription} className="absolute left-[1.5rem] w-[22px]"/>  {item.text}
                    </button>
                  )
                })
              }
                
            </div>
            <hr  className="bg-loginLinkPartition h-[1px] border-none mb-2"/>
            <p className="text-center text-[14px]">Don't have an account? 
            <span onClick={gotoSignup} className="text-primary cursor-pointer"> Sign Up</span> </p>
          
           
        
    </>
  )
}

export default LoginScreenOne