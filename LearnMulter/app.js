const express = require("express");
const app = express();

const path = require("path");
const multer = require("multer");
/*

Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

NOTE: Multer will not process any form which is not multipart (multipart/form-data).

Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

Basic usage example:

Don't forget the enctype="multipart/form-data" in your form.

<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>

*/

const crypto = require("crypto");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      const filename = bytes.toString("hex") + path.extname(file.originalname); //converting bytes to hexdecimal format for naming file and then from original file name we extracted the file format (for ex: jpg or jpeg) and concat it with our generated file name and store in uploads folder
      cb(null, filename);
    });
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.redirect("/test");
});

app.listen(3000);
