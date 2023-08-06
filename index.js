require('dotenv').config()
const express = require("express")
const mongoose=require("./mongoose/mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const app = express();
const Form=require("./models/form.js")


//body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.urlencoded({ extended: true }))//must use
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("frontend"))
app.get("/home", (req, res) => {
    res.render("index")
})
app.get("/contact", (req, res) => {
    res.render("contactpage")
})
app.post("/contact",async  (req, res) => {

    try{
        console.log(req.body);
      
      const form=new Form(req.body)
      await form.save();
      res.status(200).redirect("/home")
    }catch(e){
     
        res.status(400).send("400 bad request :(")
    }
  
})

app.listen(process.env.PORT, (err) => {
    console.log("listenins")
})