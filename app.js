const express = require('express'); //import express
const app = express();
const port = 3000;
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://HackClub:LFAHackClub123@cluster0.eqbtmac.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get("/", function(req, res){
    res.render("pages/home")
})

app.get("/aboutus", async function(req, res){

    const database = client.db('Main');
    var data = await database.collection('users').find().toArray();
    
    res.render("pages/about", {data:data});
})

app.post("/login", async function(req, res){
    console.log(req.body);

    var username = req.body.user;
    var password = req.body.pass;

    let user = {
        username: username,
        password: password
    }

    const database = client.db('Main');

    var data = await database.collection('users').insertOne(user);
})

app.listen(port, function(){
    console.log("App running on: http://localhost:" + port);
}) //starts the website on the host 3000
// localhost:3000