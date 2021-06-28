const express = require ("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let calculate = false;

let result = 0;

app.get("/",function(req, res){
  calculate = false;
  //console.log(__dirname); //gives the file path of the current file
  ///Users/juanitavelez/Web Development/Calculator
  //res.sendFile(__dirname+"/index.html");
  res.render('home', {calculate: calculate, sum: result});
})

app.post("/",function(req,res){
  //console.log(req.body);  //Console logs what the user submitted
  calculate = true;
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1+num2;
  res.render('home', {calculate: calculate, sum: result})
  //res.send("The result of the calculation is: "+result);
})

// BMI calculator
app.get("/bmicalculator",function(req, res){
  calculate = false;
  //res.sendFile(__dirname+"/bmiCalculator.html");
  res.render('bmi', {calculate: calculate, sum: result});
})


app.post("/bmicalculator",function(req,res){
  calculate = true;
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let result = weight/Math.pow(height,2);
  //res.send("Your BMI is: "+bmi);
  res.render('bmi', {calculate: calculate, sum: result})

})


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
