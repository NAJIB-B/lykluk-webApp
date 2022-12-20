
import LeftSideNavLinks from "../leftSideNavLinks/leftSideNavLinks"
import PopularAccountSection from "../popularAccoutsSection/popularAccountSection"

const  LeftSideNav=()=> {
  return (
    <>
    <div className="px-[1.5rem] ">
    <LeftSideNavLinks></LeftSideNavLinks>
    <PopularAccountSection></PopularAccountSection>
    </div>

    
    </>
  )
}

export default LeftSideNav