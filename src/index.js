const express = require("express");
const rotas = require("../routers/rotas");
const validarSenha = require("../middlewares/intermediador");
const app = express();

app.use(express.json());

app.listen(3000);
app.use(validarSenha);
app.use(rotas);
