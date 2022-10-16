import React from "react";
import ToolBar from "../../components/toolbar/ToolBar";
import SideBar from "../../components/sidebar/Sidebar";
import Feeds from "../../components/feeds/Feeds";
import RightBar from "../../components/rightbar/RightBar";
import "./home.css";
const Home =() =>{
     return (
         <React.Fragment>
         <ToolBar/>
         <div className="homeContainer">
            <SideBar />
            <Feeds  />
            <RightBar />
         </div>
         </React.Fragment>

     )
}

 
 export default Home;