const express = require("express");
const app = express();
const path = require("path");

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for rendering static files like css
app.use(express.static(path.join(__dirname, "public")));
// __dirname gives us path of our curent folder (Basically here we try to target the public folder for accessing static assets)

// Setting ejs as view engine for frontend
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("homePage");
});

// localhost:3000/profile/mohan
app.get("/profile/:username", function (req, res) {
  const user = req.params.username; //to get user's name from url
  res.send(`Welcome, ${user}`);
});

// localhost:3000/author/mohan/25
app.get("/author/:username/:page", function (req, res) {
  const user = req.params.username; //to get user's name from url
  const pageNo = req.params.page; //to get page number
  res.send(`Welcome, ${user} to page ${pageNo}`);
});

app.listen(3000, function () {
  console.log("Running!");
});
