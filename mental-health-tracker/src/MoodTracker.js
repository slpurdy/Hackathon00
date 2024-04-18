// MoodTracker.js
import React, { useState } from 'react';

function MoodTracker() {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Mood tracked:", { mood, notes });
    // Add code to send mood data to backend or perform other actions
  };

  return (
    <div className="mood-tracker">
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <div className="mood-input">
          <label htmlFor="mood-select">Select your mood:</label>
          <select id="mood-select" value={mood} onChange={handleMoodChange}>
            <option value="">Select Mood</option>
            <option value="Happy">😊 Happy</option>
            <option value="Sad">😔 Sad</option>
            <option value="Angry">😡 Angry</option>
            {/* Add more mood options as needed */}
          </select>
        </div>
        <div className="notes-input">
          <label htmlFor="notes-textarea">Notes:</label>
          <textarea id="notes-textarea" value={notes} onChange={handleNotesChange} />
        </div>
        <button type="submit">Track Mood</button>
      </form>
    </div>
  );
}

export default MoodTracker;
