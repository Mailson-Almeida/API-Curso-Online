const validarSenha = (req, res, next) => {
  const { senha } = req.query;
  const senhaAcesso = "cubos123";
  if (!senha) {
    return res.status(400).json({ mensagem: "O campo senha é obrigatório" });
  }

  if (senha !== senhaAcesso) {
    return res.status(401).json({ mensagem: "Senha inválida!" });
  }

  next();
};

module.exports = validarSenha;
