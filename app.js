const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("pages/home");
})

app.listen(port, function(){
    console.log("App running on: http://localhost:" + port);
})