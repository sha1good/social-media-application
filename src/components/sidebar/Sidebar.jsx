import React from "react";
import { 
    RssFeed,
PlayCircleFilledOutlined,
Chat,
Group,
Bookmark,
HelpOutline,
WorkOffOutlined,
BookOutlined,
Event,
School
} from "@material-ui/icons";
import "./sidebar.css";
import CloseFriends from "../closeFriends/CloseFriends";
import { Users } from "../../dummyData";
const Sidebar = () => {

    
    const user = Users.filter(u=>u.id ===2)[0].id;
    console.log(user);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcons" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcons" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcons" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcons" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcons" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOffOutlined className="sidebarIcons" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <BookOutlined className="sidebarIcons" />
            <span className="sidebarListItemText">Books</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcons" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcons" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr  className="sidebarHr"/>
        <ul className="sidebarFriendList">
         { Users.map(u =>(
            <CloseFriends  key= {u.id} user={u}/>
         ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
