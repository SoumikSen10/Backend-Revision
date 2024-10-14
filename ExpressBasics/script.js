const express = require("express");

const app = express();

//app.use(function (req, res, next) {}); //middleware-> since used at the top hence any req that is handled below before that this middleware will run first

app.use(function (req, res, next) {
  console.log("Run middleware");
  next(); //middleware after processing forwards control to further routes
});

app.use(function (req, res, next) {
  console.log("Run middleware once more");
  next();
});

//app.get(route,requestHandler)
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/about", function (req, res) {
  res.send("Hii guys");
});

app.get("/profile", function (req, res, next) {
  //res.send("This is profile page");
  return next(new Error("Something went wrong"));
});

//Error handling code
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke!!");
});

app.listen(3000);
