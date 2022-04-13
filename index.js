const express = require("express");
const Pokedex = require('pokedex')
const app = express();
const port = 3000;
const pokedex = new Pokedex();
 


app.get("/", function (req, res) {
  res.send("Bem Vindo a Pokedex");
});

app.get("/pokemoninicial", function (req, res) {
  res.send(pokedex.pokemon('squirtle'));
});
app.get("/todospokemon", function(req, res) {
  res.send(pokedex.pokemon(''));
});

app.listen(port, () => {
  console.log("Aplicação rodando na porta " + port);
});
