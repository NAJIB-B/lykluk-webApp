import AuthModalContainer from "../../components/authModalContainer/authModalContainer"
import AuthModalOverlay from "../../components/authModalOverlay/authModalOverlay"
import SignupScreenOne from "../../components/signup/signupScreenOne"
import SignUpScreenTwo from "../../components/signup/signUpScreenTwo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SectionWithoutBackBtn from "../../components/authModalTopSection/sectionWithoutBackBtn"
import SectionWithBackBtn from "../../components/authModalTopSection/sectionWithBackBtn"

const  Signup =()=> {
  const navigate = useNavigate()
  const closeModal =()=>{
    navigate("/", { replace: true }); 
  }
  const goBack =()=>{
    setFirstScreen(true)
  }
  const [firstScreen, setFirstScreen] =useState<boolean>(true)
  const gotoSecondScreen =()=>{
    setFirstScreen(false)
  }
  return (
    <>
    <AuthModalContainer>
     {
      firstScreen?(
        <>
        <SectionWithoutBackBtn closeModal={closeModal}></SectionWithoutBackBtn>
        <SignupScreenOne userFunction={gotoSecondScreen}></SignupScreenOne>
        </>
      ):(
        <>
        <SectionWithBackBtn closeModal={closeModal} goBack={goBack}></SectionWithBackBtn>
        <SignUpScreenTwo></SignUpScreenTwo>
        </>
      )
     }
    </AuthModalContainer>
    <AuthModalOverlay closeModal={closeModal}></AuthModalOverlay>
    </>
  )
}

export default Signup