import React from 'react';
import "./Posts.css";
import { BiSolidLike } from "react-icons/bi";

const Posts = () => {
  return (
    <div className='cards'>

      {/* Post 1: A Changing World Order */}
      <div className="part">
        <div className="heading">
          <div className="topic">
            {/* Title for the first post */}
            <strong className="topic">A Changing World Order</strong>
          </div>
       
          <div className="upvote hlt">
            {/* Thumbs-up icon for upvotes */}
            <BiSolidLike className="hlticons thumbs-up" />
          </div>
        </div>
        <div className="article">
          {/* Content for the first post */}
          The world is changing at a feverish pace. Friends, colleagues, and everyone engaged in knowledge work are beginning to sense this, including...
        </div>
        <div className="postfoot">
          <div className="type">
            {/* Type of post and author */}
            <p className="posttype">musings</p> by anujgosalia
          </div>
          <div className="postinfo">
            {/* Post information */}
            <span> August 2 &#183; 2 mins Read &#183; 102 Views</span>
          </div>
        </div>
      </div>

      {/* Separator Line between posts */}
      <div className="separator"></div>

      {/* Post 2: India v/s Australia */}
      <div className="part">
        <div className="heading">
          <div className="topic">
            {/* Title for the second post */}
            <strong className="topic">India v/s Australia</strong>
          </div>
          <div className="upvote hlt">
            {/* Thumbs-up icon for upvotes */}
            <BiSolidLike className="hlticons thumbs-up" />
          </div>
        </div>
        <div className="article">
          {/* Content for the second post */}
          Think about it - this cricket series was akin to therapy. Laying our childhood trauma up top, working with it slowly and surely over two m...
        </div>
        <div className="postfoot">
          <div className="type">
            {/* Type of post and author */}
            <p className="posttype">thought</p> by anujgosalia
          </div>
          <div className="postinfo">
            {/* Post information */}
            <span> January 21 &#183; 1 mins Read &#183; 156 Views</span>
          </div>
        </div>
      </div>

      {/* Separator Line between posts */}
      <div className="separator"></div>

      {/* Post 3: Yet Another New Dawn */}
      <div className="part">
        <div className="heading">
          <div className="topic">
            {/* Title for the third post */}
            <strong className="topic">Write To Build</strong>
          </div>
          <div className="upvote hlt">
            {/* Thumbs-up icon for upvotes */}
            <BiSolidLike className="hlticons thumbs-up" />
          </div>
        </div>
        <div className="article">
          {/* Content for the third post */}
          Writing is the first step to create:
          <br />
          <br />
          - stories
          <br />
          - products
          <br />
          - companies
        </div>
        <div className="postfoot">
          <div className="type">
            {/* Type of post and author */}
            <p className="posttype">thought</p> by anujgosalia
          </div>
          <div className="postinfo">
            {/* Post information */}
            <span> November 18 &#183; 1 min Read &#183; 228 Views</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Posts;
