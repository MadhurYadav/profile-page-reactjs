import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src="https://asset.brandfetch.io/idbHZbvDnq/idyVYzyWqK.png" alt="" className="logo-img" />
        <span className="stories-text">STORIES</span>
      </div>
      <div className='courses'>
        <button className="course-btn">Courses</button>
      </div>
    </div>
  );
}

export default Header;
