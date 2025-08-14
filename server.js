// Load environment variables from the .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import the submissions router
// This is the line where the 'Cannot find module' error was occurring,
// which we now know was due to a typo in module.exports in submissions.js.
const submissionsRouter = require('./routes/submissions');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Enable Cross-Origin Resource Sharing
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// Routes
// Use the submissions router for all requests to '/api/submissions'
app.use('/api/submissions', submissionsRouter);

// Root route to confirm the server is running
app.get('/', (req, res) => {
  res.send('Pushpagiri Backend is running 🚀');
});

// MongoDB Connection
// Connect to the database using the MONGO_URI from environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
  // Start the server only after a successful database connection
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
  // Exit the process if the database connection fails
  process.exit(1);
});
