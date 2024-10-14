const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

//Cookie-parser is a module that parses cookies from a request's Cookie header and makes the cookie data available to the developer.
app.use(cookieParser());

/* app.get("/", (req, res) => {
  res.cookie("name", "Sam");
  res.send("Done!");
});

app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.send("Reading!");
}); */

/* const password = "pass123";

app.get("/", function (req, res) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      //store hashed password in db
      console.log(hash);
      bcrypt.compare(password, hash, function (err, result) {
        console.log(result); //if true then it has matched
      });
    });
  });

  res.send("Hello");
}); */

app.get("/", function (req, res) {
  let token = jwt.sign({ email: "samaltman@gmail.com" }, "secret"); //this secret should be stored securely which helps in encryption and hence here we created the token
  console.log(token);

  //sending this token as a cookie
  res.cookie("token", token); //token name and token value passed
  res.send("Done");
});

app.get("/read", function (req, res) {
  //console.log(req.cookies.token);
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data); //decrypted cookie data from browser
  res.send("Reading!");
});

app.listen(3000);
