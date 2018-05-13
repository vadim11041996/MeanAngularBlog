var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog2018');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/blogpost", createPost);

function createPost(req, res){
    var post = req.body;
    console.log(post);
    res.json(post);
}

app.listen(3005);
