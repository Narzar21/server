const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
var data = (require('./data.js'))
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/',function (request, response){
  response.send('Привет от сервера!');
})

app.get('/tableData', function (request,response){
  response.send(data)
});

console.log("сервер с портом "+port+" запущен");
app.listen(port);
