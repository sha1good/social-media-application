import React, { useContext, useEffect, useState } from "react";
import Share from "../share/Share";
import "./feeds.css";
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Feeds = ({username}) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
   
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username ? 
      await axios.get("/posts/profile/" + username) : 
      await axios.get("/posts/timeline/" + user._id);
     setPosts(response.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [user._id,username]);
  return (
    <div className="feeds">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
