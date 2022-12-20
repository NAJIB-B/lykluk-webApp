import pic from "./images/Ellipse 216.svg"
const  PopularAccountItem =()=> {
  return (
    <div className="flex justify-between mb-3">
        <div className="flex">
            <div><img src={pic} alt="profile"  className="mr-[8px]"/> </div>
            <div className="flex flex-col">
                <p className="text-[14px]">Davido</p>
                <p className="text-[12px] mt-[-3px]">@davido</p>
            </div>
             
            </div>
        <div><button className="bg-primary py-1 px-3 text-white rounded-[6px]">Follow</button></div>
    </div>
  )
}

export default PopularAccountItem