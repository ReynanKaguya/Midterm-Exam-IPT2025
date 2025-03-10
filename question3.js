// Import Express
const express = require('express');

// Initialize the app
const app = express();
const PORT = 3000;

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Reynan Cudillo' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
