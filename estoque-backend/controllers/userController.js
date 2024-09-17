const { User } = require('../models');
const bcrypt = require('bcryptjs');

const updateUser = async (req, res) => {
  try {
    const { id } = req.user;  // Supondo que o ID do usuário seja extraído do token de autenticação
    const { username, password } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    let hashedPassword = user.password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    await user.update({
      username: username || user.username,
      password: hashedPassword
    });
    res.json({ message: 'Usuário atualizado com sucesso', user });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ message: 'Erro ao atualizar usuário' });
  }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.user;
        await User.destroy({ where: { id } });
        res.status(204).json();
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).json({ message: 'Erro ao excluir usuário' });
    }
};

const getUserCompanies = async (req, res) => {
    try {
      const ownerId = req.user;
      const companies = await Company.findAll({
        where: { ownerId }
      });
      if (companies.length === 0) {
        return res.status(404).json({ message: 'Nenhuma empresa encontrada para este usuário' });
      }
      res.json(companies);
    } catch (error) {
      console.error('Erro ao listar empresas do usuário:', error);
      res.status(500).json({ message: 'Erro ao listar empresas do usuário' });
    }
  };

  module.exports = {
    updateUser,
    deleteUser,
    getUserCompanies
  };