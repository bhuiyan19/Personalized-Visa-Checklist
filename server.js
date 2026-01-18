const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Visa Checklist Tool is running' });
});

// Start server
app.listen(PORT, () => {
    console.log('🌍 Personalized Visa Checklist Generator is LIVE!');
    console.log(`✅ Server running at: http://localhost:${PORT}`);
    console.log(`📝 Open your browser and visit the URL above to use the tool`);
    console.log('\nPress Ctrl+C to stop the server');
});
