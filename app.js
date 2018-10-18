const express = require('express');
const app = express();
const url = require('url'); 

app.get('/', (req, res) => {
  const source = req.query.source ? req.query.source : 'World';
  res.send(`Hello ${source}`);
});

app.get('/vv(/*)?', (req, res) => {
   const urlData = req.url.match(/\/vv\/(.*)(\/)?/);
   res.redirect(url.format({
       pathname:"/",
       query: {  "source":  urlData.length > 0 ? urlData[1] : '' }
   }));
});

var server = app.listen(3000, () => {
});
