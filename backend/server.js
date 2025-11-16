require('dotenv').config();
const reportRoutes = require('./routes/reportRoutes');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// API route
app.use('/api/reports', reportRoutes);

// Default route for Render root URL
app.get("/", (req, res) => {
  res.send("Backend is running ✔");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
