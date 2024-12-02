const pool = require('../db/db');

// Consulta para listar todos os usuários
const getAllUsers = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

// Consulta para buscar um usuário por ID
const getUserById = async (id) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
};

// Inserir um novo usuário
const createUser = async (name, email) => {
    const result = await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
    );
    return result.rows[0];
};

// Atualizar um usuário
const updateUser = async (id, name, email) => {
    const result = await pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [name, email, id]
    );
    return result.rows[0];
};

// Excluir um usuário
const deleteUser = async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
