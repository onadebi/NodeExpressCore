var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

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
    res.render('about');
});
app.listen(port,function(){
    console.log('server started on port: '+port);
});