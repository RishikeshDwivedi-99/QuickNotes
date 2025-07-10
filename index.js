// Passing a fucntion to an existing function to perform a small task are callback function and higher order function
// in event driven programming we need to invoke certain functions based on that event in such cases we can use IIFE (immediately invoked function expression)

const express = require("express");
const app = express();
const PORT = 5000;
const fs = require('fs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", (req,res)=>{
  fs.readdir("./files", (err, files)=>{
    res.render("home",{file : files})
  })
})

app.post("/add", (req,res) =>{
  fs.writeFile(`./files/${req.body.title}.txt`,`${req.body.details}`, (err)=>{
    res.redirect("/");
  })
});

app.get("/read/:filename",(req,res)=>{
  console.log(req.params.filename);
  fs.readFile(`./files/${req.params.filename}`,"utf-8", (err,filedata)=>{
    console.log(filedata);
    res.render("readM", {filename : req.params.filename, filedata : filedata});
  })
})

app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`);
});
