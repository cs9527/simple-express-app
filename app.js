const express = require('express');
const app = express();
const request = require('request');

app.get('/', (req, res) => {
  const source = req.query.source ? req.query.source : 'World';
  res.send(`Hello ${source}`);
});


app.get('/vv(/*)?', (req, res) => {
  const urlData = req.url.match(/\/vv\/(.*)(\/)?/);
  const souce = urlData.length > 0 ? urlData[1] : '';
  request(`http://localhost:3000/${souce}`, { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
     res.send(body);
 })
});

var server = app.listen(4000, () => {
});
