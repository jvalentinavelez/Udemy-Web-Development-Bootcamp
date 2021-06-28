const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js"); //date module

const app = express();

//EJS, Embedded JavaScript templating
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = ["Buy groceries", "Make pasta", "Call friend"];
const workItems = ["Learn ReactJS", "Finish work project"];

app.get("/",function(req, res){

  //let day = date();
  const day = date.getDate();
  res.render('list', {listTitle: day, listItems:items});

});

//Adding an item to the Todo list
app.post("/",function(req,res){

  let item = req.body.newItem;

  if (req.body.list === "Work List"){
    workItems.push(item)
    res.redirect("/work");
  }
  else{
  items.push(item);
  res.redirect("/");
  }

  //res.render('list',{newListItem: item});
  //res.redirect("/");
});

app.get("/work", function(req,res){
  res.render('list',{listTitle: "Work List", listItems: workItems});
})

app.get("/about",function(req,res){
  res.render("about");
})


app.listen(3000,function(){
  console.log("Server is running on port 3000.");
});
