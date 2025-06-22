import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Category from './components/Category';
import VideoGrid from './components/VideoGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Category />
      <VideoGrid />
    </div>
  );
}

export default App;
