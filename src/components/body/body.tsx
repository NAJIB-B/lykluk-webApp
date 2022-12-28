import LeftSideNav from "../leftSideNav/leftSideNav"
import RightSideNav from "../rightSideNav/rightSideNav"
import CenterNav from "../centerMenu/centerMenu"
import LeftSideNavLinks from "../leftSideNavLinks/leftSideNavLinks"
import PopularAccountSection from "../popularAccoutsSection/popularAccountSection"


const Body=()=> {
  return (
    
    
    <div className=" bg-backgroundGray mt-[3.7rem] ">
      <div className="flex fixed bottom-0 top-[60px]">

        <div className=" w-[25%] h-[100%] ">
          
          <LeftSideNavLinks></LeftSideNavLinks>
          <PopularAccountSection></PopularAccountSection>
          
         
        </div>
        <div className="w-[49.5%] centerNav">
           <CenterNav></CenterNav>
        </div>
        <div className="w-[25.5%] rightSideNav"> 
         <RightSideNav></RightSideNav>   
        </div>
      </div>
    </div>
   
  )
}

export default Body