var express = require('express');
var app = express();



// Middleware
app.use(express.bodyParser()); // For form data.

// Default folder is the public sub-folder.
app.use(express.static(__dirname + '/public'));


app.listen(4300);

console.log('Server running, to view: http://localhost:4300');
