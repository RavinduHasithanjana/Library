require('dotenv').config(); 
const express = require('express');
const app = express();


// Default route
app.get('/', (req, res) => {
    res.send('This is the default route of Library.');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(` listening on port ${PORT}`);
});