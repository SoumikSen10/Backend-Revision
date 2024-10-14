const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Sam",
    age: 25,
    email: "sam2003@gmail.com",
  });
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "Learning MERN",
    user: "670cd505ca5eef9ad2629d4e",
  });

  let user = await userModel.findOne({ _id: "670cd505ca5eef9ad2629d4e" });
  user.posts.push(post._id);

  await user.save();

  res.send({ post, user });
});

app.listen(3000);
