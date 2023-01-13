import ForgotPasswordScreenOne from "../../components/forgotPassword/forgotPasswordScreenOne"
import ForgotPasswordEmailScreen from "../../components/forgotPassword/forgotPasswordEmailScreen"
import ForgotPasswordPhoneNumberScreen from "../../components/forgotPassword/forgotPasswordPhoneNumberScreen"
import AuthModalContainer from "../../components/authModalContainer/authModalContainer"
import SectionWithBackBtn from "../../components/authModalTopSection/sectionWithBackBtn"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthModalOverlay from "../../components/authModalOverlay/authModalOverlay"



function ForgotPassword() {
    const navigate = useNavigate()
    const closeModal =()=>{
      navigate("/", { replace: true }); 
    }
    const goBack =()=>{
        if(firstScreen){
            navigate("/login", { replace: true }); 
        }
        setFirstScreen(true)
    }
    const [firstScreen, setFirstScreen] =useState(true)
    const gotoSecondScreen =()=>{
        setFirstScreen(false)
      }
      const [email, setEmail] = useState(true)

      const switchMethod =()=>{
        setEmail(!email)
      }
  return (
<>
<AuthModalContainer>
    {
       firstScreen?(
        <>
        <SectionWithBackBtn closeModal={closeModal} goBack={goBack}></SectionWithBackBtn>
        <ForgotPasswordScreenOne nextPageFunction={gotoSecondScreen} email={email} switchMethod={switchMethod}></ForgotPasswordScreenOne>
        </>
       ):(
        <>
          <SectionWithBackBtn closeModal={closeModal} goBack={goBack}></SectionWithBackBtn>
          {
            email?<ForgotPasswordEmailScreen></ForgotPasswordEmailScreen>:
            <ForgotPasswordPhoneNumberScreen></ForgotPasswordPhoneNumberScreen>
          }
          
        </>
       )
    }
        

</AuthModalContainer>
<AuthModalOverlay closeModal={closeModal}></AuthModalOverlay>
</>
  )
}

export default  ForgotPassword