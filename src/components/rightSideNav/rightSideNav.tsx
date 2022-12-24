import  yellowShirtWoman from "./images/aa 2.svg";
import best from "./images/best.svg"
import bolt from "./images/bolt.svg"
import covid from "./images/covid.svg"
import funny from "./images/funny.svg"
import testtube from "./images/testtube.svg"
import img1 from "./images/Image (3).svg"
import img2 from "./images/Image (4).svg"
import avatar from "./images/Avator.svg"

const  RightSideNav=()=> {
  return (
    <div className="pr-[1rem] py-1">
      <div className=" overflow-y-auto">

      <div className="flex justify-between bg-gradient-to-b from-[white] to-[#00224B] rounded-[19px] p-[1rem]">
        <div>
        <h4 className="text-[18px]">Discover trending videos around you</h4>
        <p className="text-[14px]">Be a video star! Create and share awesome videos to the community!</p>
        </div>
        <div>
       
          <img src={yellowShirtWoman} alt=""  className="w-[350px] inline-block  text-left "/>
          
          
        </div>
      </div>
      <div className="flex justify-between mt-[0.7rem]">
        <div>
        <img src={best} alt="best"  className="w-[55px]"/>
        <p className="text-[12px] mt-[0.2rem] text-center font-medium">Best</p>
        </div>
        <div>
        <img src={funny} alt="best" className="w-[55px]"/>
        <p className="text-[12px] mt-[0.2rem] text-center font-medium">Funny</p>
        </div>
        <div>
        <img src={bolt} alt="bolt" className="w-[55px]"/>
        <p className="text-[12px] mt-[0.2rem] text-center font-medium">Extreme</p>
        </div>
        <div>
        <img src={testtube} alt="testtube" className="w-[55px]"/>
        <p className="text-[12px] mt-[0.2rem] text-center font-medium">Science</p>
        </div>
        <div>
        <img src={covid} alt="covid" className="w-[55px]"/>
        <p className="text-[12px] mt-[0.2rem] text-center font-medium">Covid</p>
        </div>

      </div>
      

      <div className="flex justify-between mt-[1rem] items-center">
          <h4>#Popular</h4>
          <p className="text-[10px]">18M</p>
        </div>
        <div className="flex justify-between">
          <div className="p-[0.3rem] relative">
            <img src={img1} alt="" />
            <div className="absolute bottom-[0.8rem] left-[0.5rem]">
              <div className="flex items-center">
              <img src={avatar} alt="" className="mr-[0.5rem]"/>
                <span className="text-white text-[12px] " >Najib Bala</span>
              </div>
              
              
            </div>
            </div>
          <div className="p-[0.3rem] relative">
            <img src={img2} alt="" />
            <div className="absolute bottom-[0.8rem] left-[0.5rem]">
              <div className="flex items-center">
              <img src={avatar} alt="" className="mr-[0.5rem]"/>
                <span className="text-white text-[12px] " >Najib Bala</span>
              </div>
              
              
            </div>
            </div>
          
        </div>
        <h3 className="w-[80%]">Discover trending videos around you</h3>
        <div className="flex justify-between mt-[1rem] items-center">
          <h4>#Popular</h4>
          <p className="text-[10px]">18M</p>
        </div>
        <div className="flex justify-between">
          <div className="p-[0.3rem] relative">
            <img src={img1} alt="" />
            <div className="absolute bottom-[0.8rem] left-[0.5rem]">
              <div className="flex items-center">
              <img src={avatar} alt="" className="mr-[0.5rem]"/>
                <span className="text-white text-[12px] " >Najib Bala</span>
              </div>
              
              
            </div>
            </div>
          <div className="p-[0.3rem] relative">
            <img src={img2} alt="" />
            <div className="absolute bottom-[0.8rem] left-[0.5rem]">
              <div className="flex items-center">
              <img src={avatar} alt="" className="mr-[0.5rem]"/>
                <span className="text-white text-[12px] " >Najib Bala</span>
              </div>
              
              
            </div>
            </div>
          
        </div>
        
      </div>
     
        
    </div>
  )
}

export default RightSideNav