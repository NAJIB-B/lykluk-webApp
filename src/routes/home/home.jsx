import {Outlet} from "react-router-dom"
import TopNav from "../../components/top_nav/topNav";
import Body from "../../components/body/body";



const Home =()=>{

    return(
        <>
        
        <TopNav></TopNav>
        <Body></Body>
        <Outlet></Outlet>
        </>
    )

}

export default Home;