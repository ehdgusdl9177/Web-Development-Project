import express from "express";

let app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Me</h1><p>My name is kevin</p>`);
});

app.get("/contact", (req, res) => {
  res.send(`<h1>Contact Me</h1><p>Phone +010 1234 5678</p>`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
