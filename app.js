var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
// var logger = (req, res, next)=>{
//     console.log('...Logging');
//     next();
// }

// app.use(logger);

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set Static path
app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req, res)=>{
    res.send('Hello! valid request');
});
app.get('/about',(req, res)=>{
    res.send('Hello! about request');
});
app.listen(4200,function(){
    console.log('server started on port 4200');
});