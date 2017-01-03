var express = require('express');
var bodyParser = require('body-parser');

var messages = [];

var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/messages', function(req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({ message: req.body.message, time: new Date(), userName: "KMalone32", profile_pic: "https://avatars0.githubusercontent.com/u/6438662?v=3&s=40" });
  res.status(200).json({ messages: messages });
});

app.listen(3000);
