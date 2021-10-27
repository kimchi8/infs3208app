var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/movielist');

var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));


app.post('/add_movie', function(req,res){
	var moviename = req.body.moviename;

	var data = {
		"moviename": moviename
	}
	db.collection('movie').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
	const movieform = document.querySelector('#create-form');
 	movieform.reset(); 
	return res.redirect('index.html');
})

app.get('/', function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('index.html');
}).listen(3000)


console.log("server listening at port 3000");

app.get('/clicks', (req, res) => {
	db.collection('movie').find().toArray((err, result) => {
	  if (err) return console.log(err);
	  res.send(result);
	});
  });
