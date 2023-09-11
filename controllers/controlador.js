const alunos = require("../data/dados");

let idProximoAlunoCriado = 1;

//Obter Todos os Alunos

const obterAlunos = async (req, res) => {
  try {
    res.json(alunos);
  } catch (error) {
    console.log(error);
  }
};

// Obter Aluno pelo ID

const obterAlunoPorId = async (req, res) => {
  try {
    const idAlunoRequisistado = Number(req.params.id);
    if (isNaN(idAlunoRequisistado)) {
      return res.status(400).json({ mensagem: "o id precisa ser numerico!" });
    }
    const alunoEncontrato = alunos.find(
      (aluno) => aluno.id === idAlunoRequisistado,
    );
    if (!alunoEncontrato) {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    return res.status(200).json(alunoEncontrato);
  } catch (error) {
    console.log(error);
  }
};

//Cadastrar Aluno

const cadastrarAluno = async (req, res) => {
  try {
    const { nome, sobrenome, idade, curso } = req.body;
    if (!nome || !sobrenome || !idade || !curso || idade <= 18) {
      return res.status(400).json({
        mensagem: "Todos os campos devem ser preenchidos corretamente!",
      });
    }

    const novoAluno = {
      id: idProximoAlunoCriado,
      ...req.body,
    };
    alunos.push(novoAluno);
    idProximoAlunoCriado++;

    res.status(201).send();
  } catch (error) {
    console.log(error);
  }
};

// Excluir aluno

const excluirAluno = async (req, res) => {
  try {
    const idAlunoRequisistado = Number(req.params.id);
    if (isNaN(idAlunoRequisistado)) {
      return res.status(400).json({ mensagem: "o id precisa ser numerico!" });
    }
    const indiceAlunoExclusao = alunos.findIndex(
      (aluno) => aluno.id === idAlunoRequisistado,
    );
    if (indiceAlunoExclusao < 0) {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    const alunoRemovido = alunos.splice(indiceAlunoExclusao, 1)[0];

    return res.json(alunoRemovido);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  obterAlunos,
  obterAlunoPorId,
  cadastrarAluno,
  excluirAluno,
};
