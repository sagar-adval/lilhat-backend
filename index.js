const express = require('express');

const app = express();

const port = 3000;

app.get('/home', (req, res) => {
    return res.send('Home');
})

app.listen(port, () => {
    console.log('Server started');
})