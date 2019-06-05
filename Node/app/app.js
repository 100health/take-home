var express = require('express');
var app = express();

app.use(express.static('./frontend/take-home/frontend/'));

app.listen(80, function(){
    console.log("Server listening on port 80");
});