var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var port = 4000

router.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, '/style.css'));
});

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

router.get('/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/script.js'));
});




app.use('/', router);
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("deployed Application")
})
