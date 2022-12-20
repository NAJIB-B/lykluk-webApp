import logo from "./images/logo.svg"
import cancel from "./images/Group 80275.svg"
import back from "./images/Path 26.svg"

type SectionWithoutBackBtnPropsType={
  closeModal:()=>void;
 
}

const  SectionWithoutBackBtn =({closeModal}:SectionWithoutBackBtnPropsType)=> {
  return (
    <div className='flex justify-between'>
    <div className="flex justify-center items-center">
      <img src={back} alt="back" className="w-[14px] hidden"/></div>
    <div className="flex justify-center items-center">
      <img src={logo} alt="logo" className="w-[95px] ml-[2rem]"/></div>
    <div className="flex justify-center items-center" onClick={closeModal}>
      <img src={cancel} alt="cancel"  className="w-[30px]"/></div> 
  </div>
  )
}

export default SectionWithoutBackBtn