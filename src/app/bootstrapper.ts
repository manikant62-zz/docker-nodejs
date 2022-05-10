import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

async function start() {
  app.listen(3232, () => {
    console.log("Server started on http://localhost:3232");
  });
}

start();
