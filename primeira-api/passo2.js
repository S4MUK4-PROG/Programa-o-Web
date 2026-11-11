const express = require('express');
const app = express();

app.use

let alunos = [
    { id: 1, nome: "João", curso: "Engenharia" },
    { id: 2, nome: "Maria", curso: "Medicina" },
    { id: 3, nome: "Pedro", curso: "Direito" },
];
let proximoId = 4;

app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
});
app.get('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const aluno = alunos.find((item) => item.id === id); 
    if (!aluno) {
        return res.status(200).json({ erro: "Aluno não encontrado" });
    }
    res.status(200).json(aluno);
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));