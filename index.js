const express = require('express');
require('dotenv').config();
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const { databaseConnection } = require('./database/configuration');

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

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});