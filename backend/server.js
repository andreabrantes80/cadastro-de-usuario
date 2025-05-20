const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb://localhost:27017/cadastro_usuarios", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const EsquemaUsuario = new mongoose.Schema({
  nome: String,
  email: String,
  idade: Number,
});

const Usuario = mongoose.model("Usuario", EsquemaUsuario);

app.post("/usuarios", async (req, res) => {
  const { nome, email, idade } = req.body;
  const novoUsuario = new Usuario({ nome, email, idade });

  await novoUsuario.save();

  res.json({ mensagem: "Usuário cadastro com sucesso!" });
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.find();

  res.json(usuarios);
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { nome, email, idade } = req.body;

    await Usuario.findByIdAndUpdate(id, { nome, email, idade });

    res.json({ mensagem: "Usuario atualizado com sucesso!" });
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao atualizar usuário", erro });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
      const { id } = req.params;
      console.log("Usuários antes:", await Usuario.find());
      console.log("Tentando excluir usuário com ID:", id);
      const resultado = await Usuario.findByIdAndDelete(id);
      console.log("Resultado da exclusão:", resultado);
      console.log("Usuários depois:", await Usuario.find());

    if (!resultado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    res.json({ mensagem: "Usuário excluido com sucesso!" });
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao excluir o usuário." });
  }
});

app.get("/usuarios/filtro/:termo", async (req, res) => {
  try {
    const { termo } = req.params;

    const usuariosFiltrados = await Usuario.find({
      $or: [
        { nome: { $regex: termo, $options: "i" } },
        { email: { $regex: termo, $options: "i" } },
      ],
    });

    res.json(usuariosFiltrados);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao filtrar usuários", erro });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
