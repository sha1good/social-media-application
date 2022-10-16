import React from "react";
import Share from "../share/Share";
import "./feeds.css";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
const Feeds =() =>{
    return(
         <div className="feeds">
            <div className="feedWrapper">
                <Share />
                {Posts.map(p =>
                <Post key={p.id} post={p}/>)}
            </div>
         </div>
    )
}


 export default Feeds;