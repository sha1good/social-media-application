import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <React.Fragment>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" className="birthdayImg" alt="" />
          <span className="birthdayText">
            <b>Sheriff Adebisi</b> and <b>3 other friends</b> are having a
            birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </React.Fragment>
    );
  };

  const ProfileRightBar = () => {
    return (
      <React.Fragment>
        <h4 className="rightbarTitle"> User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lagos</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Nigeria</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
             <img  src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Adebisi Hammed</span>
          </div>
          <div className="rightbarFollowing">
             <img  src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Rofiat Adebisi</span>
          </div>
          <div className="rightbarFollowing">
             <img  src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Haramyde Adebisi</span>
          </div>
          <div className="rightbarFollowing">
             <img  src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Olayinka Adebisi</span>
          </div>
          <div className="rightbarFollowing">
             <img  src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Oluwatomisin Ayinla</span>
          </div>
          <div className="rightbarFollowing">
             <img  src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Kola Ahmed</span>
          </div>
          
        </div>
      </React.Fragment>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       { profile ? <ProfileRightBar /> :   <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
