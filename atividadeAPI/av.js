const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());


let jogos = [
  { id: 1, titulo: "The Witcher 3: Wild Hunt", genero: "RPG", anoLancamento: 2015 },
  { id: 2, titulo: "Red Dead Redemption 2", genero: "Ação/Aventura", anoLancamento: 2018 },
  { id: 3, titulo: "Minecraft", genero: "Sandbox", anoLancamento: 2011 },
  { id: 4, titulo: "Hollow Knight", genero: "Metroidvania", anoLancamento: 2017 },
  { id: 5, titulo: "God of War", genero: "Ação", anoLancamento: 2018 }
];

app.get("/itens", (req, res) => {
  res.status(200).json(jogos);
});

app.get("/itens/:id", (req, res) => {
  const idParam = parseInt(req.params.id);
  const jogo = jogos.find((item) => item.id === idParam);

  if (!jogo) {
    return res.status(404).json({ erro: "Item não encontrado" });
  }

  res.status(200).json(jogo);
});


app.delete("/itens/:id", (req, res) => {
  const idParam = parseInt(req.params.id);
  const index = jogos.findIndex((item) => item.id === idParam);

  if (index === -1) {
    return res.status(404).json({ erro: "Item não encontrado" });
  }

 
  jogos.splice(index, 1);

  
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});