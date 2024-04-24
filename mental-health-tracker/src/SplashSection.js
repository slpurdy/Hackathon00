// SplashSection.js
import React, { useState } from 'react';

const suggestedLinks = {
  'Exercise': 'https://www.youtube.com/watch?v=qfWx1EPdhwE',
  'Meditation': 'https://www.youtube.com/watch?v=z0GtmPnqAd8',
  'Reading': 'https://www.youtube.com/watch?v=8tmmqU75ysY',
  // Add more activities and corresponding links here
};


function SplashSection() {
  const [mood, setMood] = useState('');
  const [emotions, setEmotions] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", { mood, emotions });
    // You can add code here to handle form submission, such as sending data to a backend server
  };

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleEmotionsChange = (event) => {
    setEmotions(event.target.value);
  };

  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value); // Update selected activity state
  };

  const handleStartTracking = (selectedActivity) => {
    const suggestedLink = suggestedLinks[selectedActivity] || 'https://www.example.com/default';
    window.open(suggestedLink, '_blank'); // Open suggested link in a new tab
  };

  return (
    <div>
      <h1>Welcome to Mental Health Tracker</h1>
      <p>Track your moods, emotions, and activities for better well-being</p>
      <form onSubmit={handleSubmit}>
        <label>
          Mood:
          <select value={mood} onChange={handleMoodChange}>
            <option value="">Select Mood</option>
            <option value="😊">😊 Happy</option>
            <option value="😔">😔 Sad</option>
            <option value="😡">😡 Angry</option>
            <option value="😴">😴 Sleepy</option>
            <option value="😇">😇 Content</option>
          </select>
        </label>
        <label>
          Emotions:
          <select value={emotions} onChange={handleEmotionsChange}>
            <option value="">Select Emotions</option>
            <option value="😄">😄 Excited</option>
            <option value="😢">😢 Tearful</option>
            <option value="😠">😠 Irritated</option>
            <option value="😌">😌 Relieved</option>
            <option value="😕">😕 Confused</option>
          </select>
        </label>
        <div>
          Select an activity:
          {/* Dropdown menu for selecting activity */}
          <select onChange={handleActivityChange}>
            <option value="">Select an Activity</option>
            <option value="Exercise">Exercise</option>
            <option value="Meditation">Meditation</option>
            <option value="Reading">Reading</option>
            {/* Add more activity options as needed */}
          </select>
          {/* Button to start tracking */}
          {selectedActivity && (
            <button onClick={() => handleStartTracking(selectedActivity)}>Click Here for a Video</button>
          )}
        </div>
        <button type="submit">Submit your current mood</button> {/* Move submit button inside the form */}
      </form>
      <p>Mood tracking and journaling application that enables you to record your mood and assists in improving your thought patterns. It gives you the ability to monitor your emotions and offers insights to enhance your overall well-being.</p>
    </div>
  );
}

export default SplashSection;
