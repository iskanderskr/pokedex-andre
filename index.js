const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");


var pokemons = JSON.parse(fs.readFileSync('data/pokemon.json','UTF-8'))
pokemons = Object.values(pokemons)

app.get("/todospokemons", function(req, res){
  res.send(pokemons);
});

app.get("/pokemongen1", function(req, res){
  res.send(pokemons.filter(p => p.num <= 151));
});



app.get("/:id", function (req, res) {
  var id = +req.params.id;
 if (id>151){
   res.send('Este Pokemon não pertence a primeira Geração');
 }
  res.send(pokemons.find(p => p.num === id));
});

app.listen(port, () => {
  console.log("Aplicação rodando na porta " + port);
});
