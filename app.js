var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


app.get('/',(req, res)=>{
    res.send('Hello! valid request');
});
app.listen(4200,function(){
    console.log('server started on port 4200');
});