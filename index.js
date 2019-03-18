var express = require('express');
var app = express();


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get('/contact', function(req, res) {
    res.sendFile(__dirname + "/html/contact.html");
});
app.listen(3000);
app.use(express.static(__dirname));

console.log("listening 3000");
