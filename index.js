require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const mongoDbConfig = require('./config/mongoose');
const authorRoute = require('./routes/authorRoutes')
const bookRoute = require('./routes/bookRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB 
mongoose.connect(mongoDbConfig.mongoURI, mongoDbConfig.options)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use('/author', authorRoute);
app.use('/book', authorRoute);

// Default route
app.get('/', (req, res) => {
    res.send('This is the default route of Library.');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(` listening on port ${PORT}`);
});