import logo from "./images/logo.svg"
import cancel from "./images/Group 80275.svg"
import back from "./images/Path 26.svg"

type SectionWithBackBtnPropsType={
  closeModal:()=>void;
  goBack:()=>void;
}

const  SectionWithBackBtn =({closeModal, goBack}:SectionWithBackBtnPropsType)=> {
  return (
    <div className='flex justify-between'>
    <div className="flex justify-center items-center">
      <img src={back} alt="back" className="w-[14px]" onClick={goBack}/></div>
    <div className="flex justify-center items-center">
      <img src={logo} alt="logo" className="w-[95px] ml-[1rem]"/></div>
    <div className="flex justify-center items-center">
      <img src={cancel} alt="cancel"  className="w-[30px]" onClick={closeModal}/></div>      
  </div>
  )
}

export default SectionWithBackBtn