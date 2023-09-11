const { Router } = require("express");
const {
  obterAlunos,
  obterAlunoPorId,
  cadastrarAluno,
  excluirAluno,
} = require("../controllers/controlador");

const rota = Router();
rota.get("/alunos", obterAlunos);
rota.get("/alunos/:id", obterAlunoPorId);
rota.post("/alunos/adicionar", cadastrarAluno);
rota.delete("/alunos/deletar/:id", excluirAluno);

module.exports = rota;
