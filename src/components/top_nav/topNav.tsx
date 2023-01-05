import logo from "./images/logo.svg"
import circlePlus from "./images/Add Circle.svg"
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";


const TopNav =()=>{
    const doit =async()=>{
        const data = {
          username:"user419@gmail.com",
          password: "password",
          app_token: "jskhfisofsij" 
        }

        try {
      
          
          const response =await fetch("https://api.lykluk.com:8080/auth/signin", {
                  method: "POST",
                
                    body:JSON.stringify(data),
                  
                  headers: {
                    "Content-Type": "application/json"
                  },
                  redirect: 'follow'
                 
                 })
          
        
            const value =  response.json()
            console.log(value)
          // const response =await fetch("https://api.lykluk.com:8080/auth/signup", {
          //         method: "POST",
                
          //           body:JSON.stringify(data),
                  
          //         headers: {
          //           "Content-Type": "application/json"
          //         },
          //         redirect: 'follow'
                 
          //        })
          
        
          //   const value =  response.json()
          //   console.log(value)
        } catch (error) {
          console.log(error)
        }
      }

    const navigate = useNavigate()
    const gotoLogin =()=>{
      navigate("/login", { replace: true });
    }

return(
    <div className="fixed top-0 w-full z-50  bg-white">
        

    <div className="border-b border-gray">
         <div className="flex justify-between  w-[80%] m-auto  py-[0.4rem]">
        <div className="flex items-center"><img src={logo} alt="logo" className="w-[80px]" /></div>
        <div className="flex items-center">
            <form className="m-auto ">
                <div className="w-full">
                <div className="absolute p-[10px]">
                <Icon icon="ic:baseline-search" color="#002248" width="28" />
                </div>
               
                <input type="text" placeholder="Search"  
                className="bg-gray rounded-[19px] border-none outline-none focus:outline-none focus:ring w-full p-[10px] placeholder-[#002248] placeholder:pl-8"/>
                </div>
                
            </form>
          
        </div>
        <div className="flex items-center">
            <div  className="border-r border-primary p-[1rem] h-[2.2rem] flex items-center">
            <button className="border border-primary rounded-[8px]  px-3 h-[2.2rem] text-primary "
            onClick={doit}>
                <img src={circlePlus} alt="post" className="inline-block w-[25px] "/> post
                </button> 
            </div>
            <div className="border-l border-primary p-[1rem] h-[2.2rem] flex items-center">
            <button 
            className=" border border-primary rounded-[8px] bg-primary  px-3 text-white h-[2.2rem]"
            onClick={gotoLogin}>
                Log in</button>
            </div>
            
        </div>

    </div>
    </div>
    </div>
   
)


}

export default TopNav;