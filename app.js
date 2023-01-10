const express = require('express'); //import express
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get("/", function(req, res){
    res.render("pages/home")
})

app.get("/aboutus", function(req, res){
    res.render("pages/about");
})

app.post("/login", function(req, res){
    var username = req.body.user;
    var password = req.body.pass;
    console.log(username);
    console.log(password);

    var rightUser = "Bill";
    var rightPass = "12345";

    if(rightUser == username && rightPass == password){
        res.send(true);
    } else {
        res.send(false);
    }
})

app.listen(port, function(){
    console.log("App running on: http://localhost:" + port);
}) //starts the website on the host 3000
// localhost:3000