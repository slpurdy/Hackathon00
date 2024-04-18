// MoodForm.js
// Import useState from react
import React, { useState } from 'react';

function MoodForm() {
  const [formData, setFormData] = useState({

    score: 1 // Default score
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
    // You can add logic here to send the form data to your backend server
    // For example, you can use fetch or Axios to make a POST request
  };

  return (
    <div>
      <h1>Mood Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="score">Score:</label>
        <input type="number" id="score" name="score" value={formData.score} min="1" max="10" onChange={handleChange} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MoodForm;
