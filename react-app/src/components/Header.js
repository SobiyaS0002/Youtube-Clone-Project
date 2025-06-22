import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="beg-sec">
        <img className="menu" src="Icons/hamburger-menu.svg" alt="menu" />
        <img className="y-logo" src="Icons/youtube-logo.svg" alt="youtube logo" />
      </div>

      <div className="mid-sec">
        <input className="search-box" type="text" placeholder="Search" />
        <button className="btn">
          <img className="s-btn" src="Icons/search.svg" alt="search" />
        </button>
        <button className="r-btn">
          <img className="v-s-btn" src="Icons/voice-search-icon.svg" alt="voice" />
        </button>
      </div>

      <div className="end-sec">
        <img className="upld-icon" src="Icons/upload.svg" alt="upload" />
        <img className="y-apps-icon" src="Icons/youtube-apps.svg" alt="apps" />
        <div className="n-item-container">
          <img className="not-icon" src="Icons/notifications.svg" alt="notifications" />
          <div className="notifications-count">3</div>
        </div>
        <img className="cur-user-pic" src="Channel-Pictures/my-channel.jpeg" alt="user" />
      </div>
    </div>
  );
}

export default Header;
