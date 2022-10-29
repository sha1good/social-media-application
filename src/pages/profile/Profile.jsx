import "./profile.css";
import React,{ useState, useEffect }from "react";
import ToolBar from "../../components/toolbar/ToolBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feeds from "../../components/feeds/Feeds";
import RightBar from "../../components/rightbar/RightBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;
    const [user, setUser] = useState({});

   useEffect(() => {
         const fetchUser = async () =>{
            const response = await axios.get(`/users?username=${username}`);
            setUser(response.data);
         };
       fetchUser();  
   }, [username]) 

    return (
    <React.Fragment>
      <ToolBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
           <div className="profileRightTop">
            <div className="profileRightTopCover">
            <img src={PF + "person/noCover.png"} alt="" className="profileRightTopCoverImg" />
                <img src={PF + "person/noAvatar.png"} alt="" className="profileRightTopCoverUserImg" />
            </div>
           </div>
           <div className="profileRightBottom">
            <Feeds username={username}/>
            <RightBar user={user}/>
           </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
