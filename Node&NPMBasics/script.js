//-------------fs module ----------------

//const fs = require("fs");

/*
Just keep these in mind (IMP) ------------------
writefile
appendfile
copyfile
rename
unlink
rmdir
rm
*/

/* fs.writeFile("hello.txt", "Hello World!!", function (err) {
  if (err) console.log(`ERROR:${err}`);
  else console.log("DONE!");
}); */

/* fs.appendFile("hello.txt", "Testing append on demo file!!", function (err) {
  if (err) console.log(`ERROR:${err}`);
  else console.log("DONE!");
}); */

/* fs.copyFile("hello.txt", "hello1.txt", function (err) {
  if (err) console.log(`ERROR:${err}`);
  else console.log("DONE!");
}); */

/* fs.rename("hello.txt", "renamed.txt", function (err) {
  if (err) console.log(`ERROR:${err}`);
  else console.log("DONE!");
}); */

/* fs.unlink("renamed.txt", function (err) {
  if (err) console.log(`ERROR:${err}`);
  else console.log("DONE!");
}); */

/* fs.rmdir("./copy", { recursive: true }, function (err) {
  if (err) console.log(`ERROR:${err}`);
  else console.log("DONE!");
}); */

/* fs.rm("./copy", { recursive: true }, function (err) {
  if (err) console.log(`ERROR:${err}`);
  else console.log("DONE!");
}); */

/*
.
.
.
.
.
.
.
.
.
*/

//-------------http module ----------------

const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("Hello World!");
});

server.listen(3000);
