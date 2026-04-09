// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
const authRoutes = require('./routes/auth');
const descriptionRoutes = require('./routes/description');
const generateRoutes = require('./routes/generate'); // ✅ import generate route

app.use('/api/auth', authRoutes);
app.use('/api', descriptionRoutes);
app.use('/api', generateRoutes); // ✅ mount generate route after app is defined

// Root route
app.get('/', (req, res) => {
  res.send('Backend API is running 🚀');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
