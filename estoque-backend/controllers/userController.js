import { User, Company } from '../models';
import { hash } from 'bcryptjs';

const updateUser = async (req, res) => {
  try {
    const { id } = req.user; // Supondo que o ID do usuário seja extraído do token de autenticação
    const { username, password } = req.body;

    // Encontra o usuário pelo ID
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Verifica se um novo nome de usuário foi fornecido e se ele já está em uso por outro usuário
    if (username && username !== user.username) {
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(409).json({ message: 'Nome de usuário já está em uso' });
      }
    }

    // Criptografa a senha se uma nova senha foi fornecida
    let hashedPassword = user.password;
    if (password) {
      hashedPassword = await hash(password, 10);
    }

    // Atualiza os campos fornecidos, mantendo os valores antigos se não forem enviados
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

  export default {
    updateUser,
    deleteUser,
    getUserCompanies
  };