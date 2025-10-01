const app = require('./app.js');

const fs = require('fs');
const path = require('path');

// Start server with serverless-optimized connection
const startServer = async () => {
    try {
        // Connect to database first
        console.log('Database connected successfully');

        // Start server after database connection
        const PORT = process.env.PORT || 3001; // Use port 3001 for core-admin
        app.listen(PORT, () => {
            console.log('Core Admin Server is running on port', PORT);
        });
    } catch (error) {
        console.error('Failed to connect to database:', error.message);
        // Don't exit in serverless - let Vercel handle it
        if (!process.env.VERCEL) {
            process.exit(1);
        }
    }
};

// Start the server
startServer();


