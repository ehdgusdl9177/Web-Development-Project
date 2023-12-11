import express from "express";

let app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.send("<H1>Home Page</H1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/kevin", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/kevin", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/kevin", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
