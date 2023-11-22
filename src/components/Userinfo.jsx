import React from 'react';
import "./Userinfo.css";
import { FcApproval } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { IoIosStar } from "react-icons/io"; 
import { BiSolidLike } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai"; 
import { FcLike } from "react-icons/fc";

const Userinfo = () => {
  return (
    <div>
      {/* Container for profile picture and followers count section */}
      <div className='userinfo'>
        {/* Profile picture section */}
        <div className="profile-pic">
          <img className='dp' src="https://pbs.twimg.com/profile_images/1148507476578275328/fsrvymGR_400x400.jpg" alt="Anuj" />
        </div>

        {/* Info section */}
        <div className="info">

          {/* User name and additional info */}
          <div className="name">
            <h3>Anuj Gosalia</h3>
            <FcGlobe className="icons" /> {/* Globe icon for location */}
            <FcApproval className="icons" /> {/* Approval icon for verified status */}
          </div>

          {/* Box for followers and following count */}
          <div className="follow">
            <div className="followers">
              <div className="count">
                6482
              </div>
              <p>Followers</p>
            </div>
            <div className="following">
              <div className="count">
                260
              </div>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bio section */}
      <div className="bio">
        <p>Co-founder & CEO at Terribly Tiny Tales</p>
        <a href="www.instagram.com" className="link">https://www.instagram.com/anujgosalia</a>

        {/* Highlights section */}
        <div className="highlights">

          {/* Star rating section */}
          <div className="stars hlt">
            {/* Use IoIosStar for a sky blue star */}
            <IoIosStar className="hlticons rating" />
            125
          </div>
          
          {/* Upvote section */}
          <div className="upvote hlt">
            {/* Thumbs-up icon with the new class */}
            <BiSolidLike className="hlticons thumbs-up" />
            12
          </div>
          
          {/* Views section */}
          <div className="views hlt">
            {/* Custom eye icon with lines above it */}
            <div className="custom-eye">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <AiOutlineEye className="hlticons eye" />
            </div>
            57.8K
          </div>
          
          {/* Likes section */}
          <div className="likes hlt">
            {/* Thumbs-up icon with the new class */}
            <FcLike className="hlticons thumbs-up"></FcLike>
            26.0K
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userinfo;
