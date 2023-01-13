import LoginScreenOne from "../../components/login/loginScreenOne"
import LoginScreenTwo from "../../components/login/loginScreenTwo"
import AuthModalContainer from "../../components/authModalContainer/authModalContainer"
import {useState} from "react" 
import SectionWithoutBackBtn from "../../components/authModalTopSection/sectionWithoutBackBtn"
import { useNavigate } from "react-router-dom"
import SectionWithBackBtn from "../../components/authModalTopSection/sectionWithBackBtn"
import AuthModalOverlay from "../../components/authModalOverlay/authModalOverlay"


const  Login =()=> {
  const navigate = useNavigate()
  const closeModal =()=>{
    navigate("/", { replace: true }); 
  }
  const goBack =()=>{
    setFirstScreen(true)
  }
  const [firstScreen, setFirstScreen] =useState(true)
  const gotoSecondScreen =()=>{
    setFirstScreen(false)
  }
  return (
      <>
      
    <AuthModalContainer>

           {firstScreen?
           (
            <>
            <SectionWithoutBackBtn closeModal={closeModal}></SectionWithoutBackBtn>
            <LoginScreenOne userFunction={gotoSecondScreen}></LoginScreenOne>
            </>
           ):(
            <>
            
            <SectionWithBackBtn closeModal={closeModal} goBack={goBack}></SectionWithBackBtn>
            <LoginScreenTwo></LoginScreenTwo>
            </>
           )
          }
            


   </AuthModalContainer>
   <AuthModalOverlay closeModal={closeModal}></AuthModalOverlay>
      </>
  )
}

export default Login