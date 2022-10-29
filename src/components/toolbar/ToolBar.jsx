import React from "react";
import "./toolbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
const ToolBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/" style={{textDecoration : "none"}}>
          <span className="logo">Sha1Social</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="search for friends,posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default ToolBar;
