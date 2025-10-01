const app = require('./app.js');
const config = require('./server/config');
const http = require('http');
const mongoose = require('mongoose');
const io = require('./server/socket/io');

// Start server with serverless-optimized connection
const startServer = async () => {
    try {
        // Connect to database first
        await mongoose.connect(config.db.baseUrl, { 
            useCreateIndex: true, 
            useNewUrlParser: true 
        });
        console.log('Database connected successfully');

        // Create HTTP server
        const httpServer = http.createServer(app);
        
        // Setup Socket.IO
        const myio = require('socket.io')(httpServer);
        io(myio);

        // Start server after database connection
        const PORT = process.env.PORT || config.server.port || 3001;
        httpServer.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        // Don't exit in serverless - let Vercel handle it
        if (!process.env.VERCEL) {
            process.exit(1);
        }
    }
};

// Start the server
startServer();


