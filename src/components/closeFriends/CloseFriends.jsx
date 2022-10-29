import "./closefriends.css";

 const  CloseFriends = ({user}) =>{
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      return(
            <li className="closeFriend">
                <img  className="closeFriendImg" src={PF+ user.profilePicture} alt=""/>
                <span className="closeFriendName">{user.username}</span>
            </li>
      )
 }

  export default CloseFriends;