import "./profile.css";
import React from "react";
import ToolBar from "../../components/toolbar/ToolBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feeds from "../../components/feeds/Feeds";
import RightBar from "../../components/rightbar/RightBar";
const Profile = () => {
  return (
    <React.Fragment>
      <ToolBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
           <div className="profileRightTop">
            <div className="profileRightTopCover">
                <img src="/assets/post/3.jpeg" alt="" className="profileRightTopCoverImg" />
                <img src="/assets/person/7.jpeg" alt="" className="profileRightTopCoverUserImg" />
            </div>
           </div>
           <div className="profileRightBottom">
            <Feeds />
            <RightBar profile/>
           </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
