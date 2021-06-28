const express = require ("express");

const app = express(); //function that represents the express module

//What should happen when a browser gets in touch with our server and makes a GET request

//app.get("home root", callback_function)
// app.get("/ -> home root",function(request, response){
// })

// app.get("/",function(request, response){
//   response.send("<h1>Hello World!</h1>");
// })

app.get("/",function(req, res){
  res.send("<h1>Hello World!</h1>");
})

app.get("/contact",function(req, res){
  res.send("Contact me at: juanita@gmail.com");
})

app.get("/about",function(req, res){
  res.send("I'm currently learning about servers using node.js and express.js");
})

app.get("/hobbies",function(req, res){
  res.send("<ul><li>Coffe</li><li>Code</li><li>Art</li></ul>");
})

//Method that listens on an specific port to any HTTP request
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
