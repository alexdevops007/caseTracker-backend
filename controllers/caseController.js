const CaseModel = require('../models/CaseModel');

// Récupérer tous les cas
exports.getAllCases = async (req, res, next) => {
  try {
    const cases = await CaseModel.find();
    res.status(200).json(cases);
  } catch (error) {
    console.error(`Error getting cases: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Créer un nouveau cas
exports.createCase = async (req, res, next) => {
  const { title, description, assignedTo, status, tasks } = req.body;

  try {
    const newCase = new CaseModel({
      title,
      description,
      assignedTo,
      status,
      tasks,
    });
    const savedCase = await newCase.save();
    res.status(201).json(savedCase);
  } catch (error) {
    console.error(`Error creating case: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Récupérer un cas par son ID
exports.getCaseById = async (req, res, next) => {
  const { caseId } = req.params;

  try {
    const foundCase = await CaseModel.findById(caseId);
    if (!foundCase) {
      return res.status(404).json({ error: 'Case not found' });
    }
    res.status(200).json(foundCase);
  } catch (error) {
    console.error(`Error getting case by ID: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Mettre à jour un cas par son ID
exports.updateCaseById = async (req, res, next) => {
  const { caseId } = req.params;
  const updateData = req.body;

  try {
    const updatedCase = await CaseModel.findByIdAndUpdate(caseId, updateData, { new: true });
    if (!updatedCase) {
      return res.status(404).json({ error: 'Case not found' });
    }
    res.status(200).json(updatedCase);
  } catch (error) {
    console.error(`Error updating case by ID: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Supprimer un cas par son ID
exports.deleteCaseById = async (req, res, next) => {
  const { caseId } = req.params;

  try {
    const deletedCase = await CaseModel.findByIdAndDelete(caseId);
    if (!deletedCase) {
      return res.status(404).json({ error: 'Case not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error(`Error deleting case by ID: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
