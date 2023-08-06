require('dotenv').config()
const express = require("express")
const mongoose = require("./mongoose/mongoose")
const bodyParser = require("body-parser");
const ejs = require("ejs")
const app = express();
const Form = require("./models/form")


//body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.urlencoded({ extended: true }))//must use
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("frontend"))
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/contact",async (req, res) => {
  try{
    res.render("contactpage")
  }
  catch(e){
      res.status(400).send("on the way :)");
  }
})
app.post("/contact", async (req, res) => {

    try {


        const form = new Form(req.body)
        await form.save();
        res.status(200).redirect("/")
    } catch (e) {

        res.status(400).send("400 bad requestt :(")
    }

})

app.listen(process.env.PORT, (err) => {

})