import "./closefriends.css";

 const  CloseFriends = ({user}) =>{
      return(
            <li className="closeFriend">
                <img  className="closeFriendImg" src={user.profilePicture} alt=""/>
                <span className="closeFriendName">{user.username}</span>
            </li>
      )
 }

  export default CloseFriends;