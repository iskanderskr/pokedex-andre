const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/pokemon", function (req, res) {
  res.send("Pokemon");
});

app.get("/teste", function (req, res) {
  res.send("Teste");
});

app.listen(port, () => {
  console.log("Aplicação rodando na porta " + port);
});
