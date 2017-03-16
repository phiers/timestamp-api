const express = require('express');

const app = express();
const PORT = process.env.PORT;

function naturalDate(date) {
    return new Date(date * 1000).toLocaleString('en-US', {timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric'});
}

function parseDate(input) {
    var result = {};
    var reg = new RegExp('^\\d+$');
    // unix case -- all numbers
    if (reg.test(input)) {
        result.unix = input;
        result.natural = naturalDate(input);
    } else {
      var unix = Date.parse(input);
      if (unix) {
        result.unix = unix/1000;
        result.natural = input;
      } else {
        return 'Enter a date or UNIX timestamp after the / to get a response';
      }
    }
    return JSON.stringify(result);
}

app.get('/', (req, res) => {
    res.send('Enter a natural language date or unix timestamp after the / to get a response');
});

app.get('/:date', (req, res) => {
    res.send(parseDate(req.params.date));
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${PORT}`);
});