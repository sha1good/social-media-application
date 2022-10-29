import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions,Cancel } from "@material-ui/icons";
import React, { useState, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

   const submitHandler = async (e) =>{
        e.preventDefault();
      
         const newPost ={
           userId : user._id,
           desc : desc.current.value,
         };
       if(file){
           const data = new FormData();
           const fileName =   Date.now() + file.name;
           data.append("name", fileName);
           data.append("file", file);
           newPost.img= fileName;
           console.log(newPost);
         try{
            await axios.post("/upload", data)
         }catch(err){}  
       }
       try{
          await axios.post("/posts", newPost);
           window.location.reload();
       }catch(err){}

   }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="shareTopImg"
          />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
           <div className ="shareImgContainer">
              <img  className="shareImg"  src={URL.createObjectURL(file)} alt=""/>
               <Cancel  className="shareImgCancel" onClick={()=>setFile(null)}/>
           </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
        <div className="shareOptions">
            <label className="shareOption" htmlFor="file">
              <PermMedia htmlColor="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                id="file"
                type="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display : "none"}}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareOptionIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareOptionIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
            <button className="shareOptionButton" type="submit">Share</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
