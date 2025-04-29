const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));


app.set("view engine","ejs");
app.set("veiws",path.join (__dirname,"/views"));
app.get("/",(req,res) => {
    res.render("home.ejs");
})
app.listen(port,() => {
    console.log(`listening on port ${port}`);
})

app.get("/rolldice",(req,res) =>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("home.ejs",{ diceVal});
});
app.get("/ig/:username",(req,res) => {

    let {username} = req.params;
 
    const instadata = require("./data.json");
    const data = instadata[username];


    // console.log(instadata);

//    let { username } = req.params;
console.log(data);

   res.render("instagram.ejs",{data});
});

// app.use(express.static("public"));
