require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use('/users', usersRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('API está funcionando no padrão MVC!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
