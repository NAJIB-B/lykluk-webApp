import avatar from "../rightSideNav/images/Avator.svg"

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
   </>
  )
}

export default VideoComponent