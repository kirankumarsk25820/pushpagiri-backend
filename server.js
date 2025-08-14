require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const submissionsRouter = require('./routes/submissions');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/submissions', submissionsRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Pushpagiri Backend is running 🚀');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});
