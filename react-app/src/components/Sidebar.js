import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sdbr">
      {[
        ['home.svg', 'Home'],
        ['explore.svg', 'Explore'],
        ['subscriptions.svg', 'Subscriptions'],
        ['originals.svg', 'Originals'],
        ['youtube-music.svg', 'Youtube music'],
        ['library.svg', 'Library'],
      ].map(([icon, label]) => (
        <div className="sdbr-link" key={label}>
          <img src={`Icons/${icon}`} alt={label} />
          <div>{label}</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
