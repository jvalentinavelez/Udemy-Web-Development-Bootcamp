const express = require("express");
const https = require("https"); //native node module
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extented:true}));

app.get("/",function(req, res){

  res.sendFile(__dirname +'/index.html');
});

app.post("/",function(req,res){
  //console.log(req.body.cityName);

  //Make GET request to external server with Node
  //const query = "London"
  const query = req.body.cityName
  const apiKey = "a428edb613b04007c001620770c074a7";
  const units = "metric";
  const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data); //Hexadecimal data to JSON
      console.log(weatherData);
      //console.log(JSON.stringify(weatherData));
      temp = weatherData.main.temp;
      weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon
      const imageURL ="http://openweathermap.org/img/wn/"+icon+"@2x.png"
      console.log(temp);
      console.log(weatherDescription);
      console.log(icon);

      //Responses that we'll give the browser

      res.write("<p>The weather is currently "+weatherDescription+"</p>")
      res.write("<h1>The temperature in "+query+" is "+temp+" degrees Celsius.</h1>");
      res.write("<img src="+imageURL+"></img>");
      res.send();

    })
  });
  //res.send("Server is up and running.");

});



app.listen(3000,function(){
  console.log("Server is running on port 3000.");
})
