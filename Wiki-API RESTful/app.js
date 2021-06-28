const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

//Local connection
mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true
});

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const articleSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articleSchema);

/////////////////////////// Requests Targetting All Articles ///////////////

//app.route("/articles").get().post().delete()
app.route("/articles")
  .get(function(req, res) {
    Article.find({}, function(err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      }
    });
  })
  .post(function(req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    })
    newArticle.save(function(err) {
      if (!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send(err);
      }
    });
  })
  .delete(function(req, res) {
    Article.deleteMany({}, function(err) {
      if (!err) {
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });


/////////////////////////// Requests Targetting A Specific Article ///////////////
app.route("/articles/:articleTitle")
  .get(function(req,res){
    const titleRequested = req.params.articleTitle;
    Article.findOne({title: titleRequested},function(err,foundArticle){
      if(!err){
        if(foundArticle){
          res.send(foundArticle);
        }else {
          res.send("No articles matching that title");
        }
      }else{
        res.send(err);
      }
    });
  })
  .put(function(req,res){
    Article.update(
      {title:req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      function(err){
        if(!err){
          res.send("Successfully updated article.");
        }else{
          res.send(err);
        }
    });
  })
  .patch(function(req,res){
    Article.update(
      {title:req.params.articleTitle},
      {$set: req.body},
      function(err){
        if(!err){
          res.send("Successfully updated article.");
        }else{
          res.send(err);
        }
    });
  })
  .delete(function(req,res){
    Article.deleteOne(
      {title:req.params.articleTitle},
      function(err){
        if(!err){
          res.send("Successfully deleted the article.");
        }else{
          res.send(err);
        }
    });
  });


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
