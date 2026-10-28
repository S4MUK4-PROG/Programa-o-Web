const express = require('express');
const app = express();

const ddds = [
    { ddd: "62", estado: "GO", cidades: ["Goiânia", "Anápolis", "Caldas Novas"] },
    { ddd: "21", estado: "RJ", cidades: ["Rio de Janeiro", "Nova Iguaçu"] },
]

app.get("/", (req, res) => {
    res.send("Minha primeira API");
});

app.get("/ddd", (req, res) => {
    res.json(ddds);
});

app.get("/ddd/:ddd", (req, res) => {  
    const encontrado = ddds.find(item => item.ddd === req.params.ddd);
   
     if (!encontrado) {
        res.status(404).json({ error: "DDD não encontrado" });
    }
      res.json(encontrado);
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));