// App.js
import React from 'react';
import './App.css';
import Logo from './Logo';
import Video from './Video';
import PromoImage from './PromoImage';
import SplashSection from './SplashSection';
import AboutSection from './AboutSection';
import Navbar from './Navbar';
import MoodTracker from './MoodTracker';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo/>
      <header className="App-header">
        <SplashSection />
      </header>
      <div className="container"> {/* Apply container class */}
        <AboutSection />
        <MoodTracker />
        <Video />
        <PromoImage />
      </div>
    </div>
  );
}

export default App;
