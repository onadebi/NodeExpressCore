var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 7200;

// set the view engine to ejs
app.set('view engine', 'ejs');
//Specify the folder we want to use for our views
app.set('views', path.join(__dirname,'views'));

///CUSTOM MIDDLEWARE
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
        Id:1,
        name:'Onadebi',
        address:'Zion',
        designation:'Great'
    },
    {
        Id:2,
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
    var Title= 'Merry Thrills | Confectinary and Homely snacks';
    res.render('index',
        {
            title:Title
        });
});


app.get('/about',(req, res)=>{
    res.render('about',{
        title:'About us',
        people:people
    });
});

app.get('/contact',(req, res)=>{
    res.render('contact',{
        title:'Contact us'
    });
});
///users/add
app.post('/users/add',(req, res)=>{
    var user  = {
        first_name: req.body.name,
        last_name= req.body.last_name,
        email = req.body.email
    };
    console.log(user.first_name+' '+user.last_name+' '+user.email);
    console.log('...REDIRECTING');
    res.redirect('/about');
});

app.listen(port,function(){
    console.log('server started on port: '+port);
});