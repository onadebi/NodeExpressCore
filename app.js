var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

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

var people = [
    {
        name:'Onadebi',
        address:'Zion',
        designation:'Great'
    },
    {
        name:'Umenu',
        address:'Heaven',
        designation:'Awesome'
    }
];


//This is how Web Apis are written for consupmtion to client side application
app.get('/js',(req, res)=>{
    res.json(people);
});

app.get('/',(req, res)=>{
    res.render('index');
});


app.get('/about',(req, res)=>{
    res.render('about');
});
app.listen(port,function(){
    console.log('server started on port: '+port);
});