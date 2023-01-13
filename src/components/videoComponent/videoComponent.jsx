import avatar from "../rightSideNav/images/Avator.svg"
import vid from "./images/vid.svg"
import like from "./images/Like (1).svg"
import dislike from  "./images/dislike (2).svg"
import comment from "./images/comment.svg"
import share from "./images/share.svg"

const  VideoComponent =()=> {
  return (
   <>
   
   <div className="flex justify-between items-center mt-[3rem]">
    <div className="flex">
        <img src={avatar} alt=""  className="w-[50px]"/>
        <div className="ml-[1rem]">
            <p className="text-[12px]">Najib Bala  <span>@najibbala</span></p>
            <p className="text-[12px]">I am goooooooooood hahaahaha</p>
            <p className="text-[12px]">#LYKLUK #RUST Load More</p>
        </div>
    </div>
    <div>
        <button className="bg-primary px-2 py-1 rounded text-white text-[14px]">Follow</button>
    </div>
   </div>
   <div className="flex  items-end mt-[1rem] w-[90%]">
    <div className="w-[90%]">
        <img src={vid} alt="" className="w-full"/>
    </div>
    <div className="ml-[2rem]">
      <div className="my-[0.5rem]">
        <img src={like} alt="" />
        <p className="text-[11px] mt-[4px] text-center text-primary">18M</p>
      </div>
      <div className="my-[0.5rem]">
        <img src={dislike} alt="" />
        <p className="text-[11px] mt-[4px] text-center text-primary">18M</p>
      </div>
      <div className="my-[0.5rem]">
        <img src={comment} alt="" />
        <p className="text-[11px] mt-[4px] text-center text-primary">18M</p>
      </div>
      <div className="my-[0.5rem]">
        <img src={share} alt="" />
        <p className="text-[11px] mt-[4px] text-center text-primary">18M</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default VideoComponent