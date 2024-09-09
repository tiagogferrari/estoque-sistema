const { Company } = require('../models');

const createCompany = async (req, res) => {
  try {
    const { name, history, values, location, department, services, contact } = req.body;
    const ownerId = req.user.id;
    if (!name || !history || !values || !location || !department || !services || !contact) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    const company = await Company.create({
      name,
      history,
      values,
      location,
      department,
      services,
      contact,
      ownerId
    });
    res.status(201).json(company);
  } catch (error) {
    console.error('Erro ao criar empresa:', error);
    res.status(500).json({ message: 'Erro ao criar empresa' });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, history, values, location, department, services, contact } = req.body;
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ message: 'Empresa não encontrada' });
    }
    if (company.ownerId !== req.user.id) {
      return res.status(403).json({ message: 'Acesso negado. Você não é o proprietário desta empresa.' });
    }
    await company.update({
      name,
      history,
      values,
      location,
      department,
      services,
      contact
    });
    res.json(company);
  } catch (error) {
    console.error('Erro ao atualizar empresa:', error);
    res.status(500).json({ message: 'Erro ao atualizar empresa' });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ message: 'Empresa não encontrada' });
    }
    if (company.ownerId !== req.user.id) {
      return res.status(403).json({ message: 'Acesso negado. Você não é o proprietário desta empresa.' });
    }
    await company.destroy();
    res.status(204).json();
  } catch (error) {
    console.error('Erro ao excluir empresa:', error);
    res.status(500).json({ message: 'Erro ao excluir empresa' });
  }
};

module.exports = {
  createCompany,
  updateCompany,
  deleteCompany
};
