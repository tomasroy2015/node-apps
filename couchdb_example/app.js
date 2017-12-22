
var express = require('express');
var route = require('routes');
var http = require('http');
var path = require('path');
var urlencode = require('url');
var bodyParser = require('body-parser');
var json = require('json');
var logger = require('logger');
var methodOverrride = require('method-override');

var nano = require('nano')('http://localhost:5948');
var db= nano.use('address');
var app = express;

app.set('port',process.env.port||3000);
app.set('views',path.join(_dirname,'views'));
app.set('view engine','jade');

app.use(bodyParser,json());
app.use(bodyParser.urlencoded());
app.use(methodOverrride());
app.use(express.static(path.join(_dirname,'public')));

app.get('/',route.index);

app.post('/createdb',function(req,res){
    nano.db.create(req.body.dbname,function(err){
        if(err){
            res.send("Error creating DB"+req.body.dbname);
            return;
        }
        res.send("Database"+req.body.dbname+" Created successfully");
    });
});

app.post('/new_contact',function(req,res){
    var name = req.body.name;
    var phone = req.body.phone;

    db.insert({name:name,phone:phone,crazy:true},phone,function(err,body,header){
        if(err){
            res.send("Error creating contact");
            return;
        }
        res.send("contact created successfully");
    });
});