var express = require('express');
var app = express();


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000);
app.use(express.static(__dirname + '/public'));

console.log("listening");
