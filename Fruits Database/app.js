const mongoose = require('mongoose');

const { MongoClient } = require("mongodb");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

//new schema
// const fruitsSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });

// Validation
const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
});

//Collectio -> Model
//Mongoose Model, .model(collection,schema)
const Fruit = mongoose.model("Fruit",fruitsSchema);

//New fruit document
const peach = new Fruit ({
  name: "Peach",
  rating: 9,
  review: "Delicious!"
});

//fruit.save();

//mongoose.connect("mongodb://localhost:27017/peopleDB", { useNewUrlParser: true });

//new schema
//Stablishing relationships
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitsSchema
});

//Mongoose Model, .model(collection,schema)
const Person = mongoose.model("Person",personSchema);

//New fruit document
// const person = new Person ({
//   name: "George",
//   age: 7
// });

const pineapple = new Fruit({
  name: "Pineapple",
  score: 4,
  review: "Not a great fruit."
});

// pineapple.save();

const person = new Person ({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 2,
//   review: "Weird texture"
// });
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// });
// const banana = new Fruit({
//   name: "Banana",
//   score: 10,
//   review: "The best fruit!"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err,fruits){
  if (err){
    console.log(err);
  }
  else{

    mongoose.connection.close();

    //console.log(fruits);
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "60b94eed2ca46211f31ca787"},{name:"Strawberry"},function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Succesfully updated the document")
//   }
// })

// Fruit.deleteOne({name:"Strawberry"},function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Succesfully deleted the document")
//   }
// })

// Person.deleteMany({name:"George"},function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Succesfully deleted the documents")
//   }
// })

// Person.updateOne({_id: "60b950f613f10c125592eddf"},{favouriteFruit:peach},function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Succesfully updated the document")
//   }
// })
