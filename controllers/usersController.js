const usersModel = require('../models/usersModel');

// Controlador para listar todos os usuários
const getAllUsers = async (req, res) => {
    try {
        const users = await usersModel.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};

// Controlador para buscar um usuário por ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
};

// Controlador para criar um novo usuário
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = await usersModel.createUser(name, email);
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

// Controlador para atualizar um usuário
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const updatedUser = await usersModel.updateUser(id, name, email);
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

// Controlador para excluir um usuário
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await usersModel.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
