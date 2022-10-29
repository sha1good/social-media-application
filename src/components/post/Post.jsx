import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useEffect, useState, useContext } from "react";
import  { format } from "timeago.js";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const reactbaseUrl = process.env.REACT_APP_BASE_URL;
  const [liked, setLiked] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [post.likes, currentUser._id]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`${reactbaseUrl}/users?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId,reactbaseUrl]);

  const likedHandler = () => {
    try {
      axios.put(`${reactbaseUrl}/posts/` + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
  };
 return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              alt=""
              src="/assets/like.png"
              onClick={likedHandler}
            />
            <img
              className="likeIcon"
              alt=""
              src="/assets/heart.png"
              onClick={likedHandler}
            />
            <span className="postLikeCounter">{liked} people like it</span>
          </div>
          <div className="postBottomRight">Comment</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
