import React from 'react';
import './VideoGrid.css';

const videos = [
  { title: 'Talking Tech and AI with Google CEO Sundar Pichai!', channel: 'Marques Brownlee', views: '19M views · 4 years ago', thumbnail: 'Thumbnails/thumbnail-1.webp', time: '14:20', profile: 'Channel-Pictures/channel-1.jpeg' },
  { title: 'Try Not To Laugh Challenge #9', channel: 'Markiplier', views: '19M views · 4 years ago', thumbnail: 'Thumbnails/thumbnail-2.webp', time: '8:22', profile: 'Channel-Pictures/channel-2.jpeg' },
  { title: 'Crazy Tik Toks Taken Moments Before DISASTER', channel: 'SSSniperWolf', views: '12M views · 1 year ago', thumbnail: 'Thumbnails/thumbnail-3.webp', time: '9:13', profile: 'Channel-Pictures/channel-3.jpeg' },
  { title: 'The Simplest Math Problem No One Can Solve - Collatz Conjecture', channel: 'Veritasium', views: '18M views · 4 months ago', thumbnail: 'Thumbnails/thumbnail-4.webp', time: '22:09', profile: 'Channel-Pictures/channel-4.jpeg' },
  { title: 'Kadane\'s Algorithm to Maximum Sum Subarray Problem', channel: 'CS Dojo', views: '519K views · 5 years ago', thumbnail: 'Thumbnails/thumbnail-5.webp', time: '11:17', profile: 'Channel-Pictures/channel-5.jpeg' },
  { title: 'Anything You Can Fit In The Circle I’ll Pay For', channel: 'MrBeast', views: '141M views · 1 year ago', thumbnail: 'Thumbnails/thumbnail-6.webp', time: '19:59', profile: 'Channel-Pictures/channel-6.jpeg' },
];

function VideoGrid() {
  return (
    <div className="vedio-grid">
      {videos.map((video, idx) => (
        <div className="video-preview" key={idx}>
          <div className="tn-row">
            <img className="tn" src={video.thumbnail} alt="thumbnail" />
            <div className="v-time">{video.time}</div>
          </div>
          <div className="video-info-grid">
            <div className="chan-pic">
              <img className="prof-pic" src={video.profile} alt="channel" />
            </div>
            <div className="v-info">
              <p className="v-title">{video.title}</p>
              <p className="marq">{video.channel}</p>
              <p className="views">{video.views}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
