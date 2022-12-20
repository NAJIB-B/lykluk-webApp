import  yellowShirtWoman from "./images/aa 2.svg";

const  RightSideNav=()=> {
  return (
    <div className="pr-[1rem] py-1">
      <div className="flex justify-between bg-gradient-to-r from-[#F1CF33] to-[#E7B30B] rounded-[19px] p-[1rem]">
        <div>
        <h4 className="text-[18px]">Discover trending videos around you</h4>
        <p className="text-[14px]">Be a video star! Create and share awesome videos to the community!</p>
        </div>
        <div>
       
          <img src={yellowShirtWoman} alt=""  className="w-[350px] inline-block  text-left "/>
          
          
        </div>
      </div>
    </div>
  )
}

export default RightSideNav