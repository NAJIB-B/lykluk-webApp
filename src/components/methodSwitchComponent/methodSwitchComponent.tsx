import { useState } from "react"
type OptionsType ={
    option1:string;
    option2:string;
}

type MethodSwitchComponentPropType={
    option1:string;
    option2:string;
    switchContent:()=> void;
    
}

const  MethodSwitchComponent =({option1, option2, switchContent}:MethodSwitchComponentPropType)=> {
    const options:OptionsType={
        option1:"phoneNumber",
        option2:"email",
    }

    const [option, setOption] = useState(options.option1)

    const changeToOption1 =()=>{
        if(option === options.option2) return
        setOption(options.option2)
        switchContent()
    }
    const changeToOption2 =()=>{
        if(option === options.option1) return
        setOption(options.option1)
        switchContent()
    }


  return (
    <div className="flex justify-center py-[1rem]">

    <div className="bg-authMethodSwitch inline-block p-[0.3rem] rounded-[30px]">
        <div className="flex">

        <div onClick={changeToOption2} 
        className={option === options.option1?      
        "bg-primary text-white text-[14px]  py-[0.5rem] text-center  rounded-[20px] w-[9rem]  cursor-pointer":
        "bg-none text-black text-[14px]  py-[0.5rem] cursor-pointer w-[9rem] text-center"}>
            {option1}</div>
        <div onClick={changeToOption1}
        className={option === options.option2?
            "bg-primary text-white text-[14px] py-[0.5rem] text-center rounded-[20px] w-[9rem]  cursor-pointer": 
            "bg-none text-black text-[14px] py-[0.5rem] cursor-pointer w-[9rem] text-center"}>
                {option2}</div>
        </div>
    </div>
    </div>
  )
}

export default MethodSwitchComponent;