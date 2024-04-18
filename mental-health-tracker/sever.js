// Import dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
let moodEntries = [];

// Routes
// Get all mood entries
app.get('/api/moods', (req, res) => {
  res.json(moodEntries);
});

// Add a new mood entry
app.post('/api/moods', (req, res) => {
  const newMoodEntry = req.body;
  moodEntries.push(newMoodEntry);
  res.status(201).json(newMoodEntry);
});

// Get insights based on mood entries
app.get('/api/insights', (req, res) => {
  // Example: Calculate average mood score
  const totalScore = moodEntries.reduce((acc, entry) => acc + entry.score, 0);
  const averageScore = totalScore / moodEntries.length;
  
  let insights = [];

  // Example: Provide insights based on average mood score
  if (averageScore > 7) {
    insights.push("You seem to be in a good mood. Keep it up!");
  } else if (averageScore > 5) {
    insights.push("Your mood seems average. Take care of yourself.");
  } else {
    insights.push("You're feeling down. Consider seeking support.");
  }

  res.json({ averageScore, insights });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3001}`);
});
