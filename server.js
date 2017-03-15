const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${PORT}`);
});