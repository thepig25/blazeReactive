var express = require('express');
var app = express.createServer();

app.configure(function(){
  app.use(express.bodyParser());
});

app.post('/ReceiveJSON', function(req, res){
  console.log(req.body);
  res.send('ok');
});

app.listen(3000);
console.log('listening to http://localhost:3000');