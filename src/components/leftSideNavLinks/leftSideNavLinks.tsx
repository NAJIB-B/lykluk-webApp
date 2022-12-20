import home from "./images/Home 1.svg"
import discover from "./images/Group 80082.svg"
import following from "./images/309041_users_group_people_icon 3.svg"
const LeftSideNavLinks =()=> {
  return (
    <div className="py-3">
        
     <div className="flex jusitfy-between items-center py-[1rem]">
        <img src={home} alt="home"  className="w-[33px] mr-[1.5rem]"/>
        <p className="text-primary">For you</p>
     </div>
     <div className="flex jusitfy-between items-center py-[1rem]">
        <img src={discover} alt="discover" className="w-[33px] mr-[1.5rem]"/>
        <p>Discover</p>
     </div>
     <div className="flex jusitfy-between items-center py-[1rem]">
        <img src={following} alt="following" className="w-[33px] mr-[1.5rem]"/>
        <p>Following</p>
     </div>
    
    </div>
  )
}

export default LeftSideNavLinks