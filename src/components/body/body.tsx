import LeftSideNav from "../leftSideNav/leftSideNav"
import RightSideNav from "../rightSideNav/rightSideNav"
import CenterNav from "../centerMenu/centerMenu"


const Body=()=> {
  return (
    <div className="fixed">
    
    <div className="flex bg-backgroundGray mt-[3.7rem] ">
        <div className="flex-[25%]"><LeftSideNav></LeftSideNav></div>
        <div className="flex-[49.5%]"> <CenterNav></CenterNav></div>
        <div className="flex-[25.5%]"> <RightSideNav></RightSideNav></div>
    </div>
    </div>
  )
}

export default Body