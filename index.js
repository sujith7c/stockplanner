//De stocker main file
//include main files

var fs = require("fs");
var express = require("express");
var helmet = require('helmet');
var exphbs  = require('express-handlebars');
var path = __dirname + '/views/';


var app = express();
app.set('port',process.env.port || 3000);
app.use(express.static('public'));
//Set Web Security 
app.use(helmet());

//Declare Express to use Handlebars template engine with main template
//the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    var content = new Object;
    content.left = "NodeJS Kick Start App - Left";
    content.right = "Node JS Kick Start App - Right"
    res.render('home',{content});
});

app.get('/about', function(req, res) {
    res.render("about");
})

app.get('/dashborad', function(req, res) {
    res.render("dashboard");
})

//custom 404 page

app.use( function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send(" 404 - Not Found!");
});

app.use( function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500)
    res.send("505 - Server not found");
});

app.listen(
    app.get('port'), function() {
        console.log("Express started http://localhost" + app.get('port')
        + ' Press Ctrl + C to terminate'
    );
    }
);


