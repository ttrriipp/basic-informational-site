const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.get("/404", function (req, res, next) {
  next();
});
app.use(function (req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname, "404.html"));
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`server now running`);
});
