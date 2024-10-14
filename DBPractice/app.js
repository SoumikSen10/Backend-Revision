const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/create", async function (req, res) {
  let createdUser = await userModel.create({
    name: "Sam",
    username: "sam2005",
    email: "sam2005@gmail.com",
  });
  res.send(createdUser);
});

app.get("/update", async function (req, res) {
  let updatedUser = await userModel.findOneAndUpdate(
    {
      username: "sam2003",
    },
    { name: "Updated Name" },
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/read-all", async function (req, res) {
  let users = await userModel.find();
  res.send(users);
});

app.get("/delete", async function (req, res) {
  let deletedUser = await userModel.findOneAndDelete({ name: "Updated Name" });
  res.send(deletedUser);
});

app.listen(3000);
