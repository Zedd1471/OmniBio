const express = require('express');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

// Add this middleware to parse JSON bodies:
app.use(express.json());

// Mount your quiz routes:
app.use('/api/quizzes', quizRoutes);

// 404 handler:
app.use((req, res) => {
  res.status(404).json({ message: 'Requested resource could not be found. 😐' });
});

module.exports = app;
