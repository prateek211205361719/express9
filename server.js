
var express = require('express');
var app = express();
app.use(express.static(__dirname+'/public'));
var hbs = require('hbs');

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getDate', function(){
    return new Date().toDateString();
});

app.set('view engine', hbs);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.render('home.hbs',{
        title:'Home Page'
    });
});

app.listen(port, function(){
    console.log('-----------running--------'+port);
});