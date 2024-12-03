require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Servir arquivos estáticos da pasta "frontend"
app.use(express.static(path.join(__dirname, 'frontend')));

// Rota para servir o `index.html` como página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Rotas da API
app.use('/users', usersRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
