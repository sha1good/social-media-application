import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({post}) => {

   const [liked, setLiked] = useState(post.like);
   const [isLiked, setIsLiked] =  useState(false);

    const likedHandler = () =>{
       setLiked(isLiked ? liked - 1 : liked + 1);
       setIsLiked((prevState) => !prevState);
    }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
           <span className="postText">{post?.desc}</span>
           <img src={post.photo}  alt=""  className="postImg"/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img  className="likeIcon" alt="" src="/assets/like.png" onClick={likedHandler}/>
                <img  className="likeIcon" alt="" src="/assets/heart.png" onClick={likedHandler}/>
                <span className="postLikeCounter">{liked} people like it</span>
            </div>
            <div className="postBottomRight">Comment</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
