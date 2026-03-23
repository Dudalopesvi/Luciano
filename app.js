const express = require('express');
const app = express();
const port = 3000;

// Middleware obrigatório para ler JSON
app.use(express.json());

// "Banco" em memória
let usuarios = ["Duda","fulano","Ciclano"];

// Rota teste
app.get('/', (req, res) => {
  res.send('Servidor OK');
});

// 🔹 LISTAR usuários
app.get('/hello', (req, res) => {
  res.json(usuarios);
});

// 🔹 CADASTRAR usuário
app.post('/hello', (req, res) => {
  // Pega os dados enviados no body
  const { nome, email } = req.body;

  // Validação simples
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
  }

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});