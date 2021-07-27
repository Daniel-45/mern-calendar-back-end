const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { databaseConnection } = require('./database/configuration');
const authRoutes = require('./routes/auth.routes');
const eventRoutes = require('./routes/event.routes');

// Create express server
const app = express();

// Settings
const PORT = process.env.PORT;

// Database
databaseConnection();

// CORS
app.use(cors());

// Public Directory
app.use(express.static('public'));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});