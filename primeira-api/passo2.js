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
        return res.status(404).json({ erro: "Aluno não encontrado" });
    }
    res.status(200).json(aluno);
});

app.post('/alunos', (req, res) => {
    const { nome, curso } = req.body;
    const novoAluno = { id: proximoId++, nome, curso };
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

app.delete('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const existe = alunos.some((item) => item.id === id);
    if (!existe) {
        return res.status(404).json({ erro: "Aluno não encontrado" });
    }
    alunos = alunos.filter((item) => item.id !== id);
    res.status(204).send();
});


app.listen(3001, () => console.log("Servidor rodando em http://localhost:3001"));