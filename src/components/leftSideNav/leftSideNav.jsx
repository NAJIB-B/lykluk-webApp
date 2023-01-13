
import LeftSideNavLinks from "../leftSideNavLinks/leftSideNavLinks"
import PopularAccountSection from "../popularAccoutsSection/popularAccountSection"

const  LeftSideNav=()=> {
  return (
    <>
    <div className=" w-[25%] overflow-hidden h-[100%]">

    <LeftSideNavLinks></LeftSideNavLinks>
    <PopularAccountSection></PopularAccountSection>
    </div>

    
    </>
  )
}

export default LeftSideNav