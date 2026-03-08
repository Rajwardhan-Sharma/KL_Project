const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static('frontend'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Catch-all to send to login if not hitting API
app.get('*', (req, res) => {
    res.redirect('/login.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
