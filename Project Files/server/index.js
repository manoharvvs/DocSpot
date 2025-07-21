// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
          .then(() => console.log("MongoDB connected"))
          .catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => {
          res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
});