const EvidenceModel = require('../models/EvidenceModel');

// Récupérer toutes les preuves numériques d'un cas
exports.getEvidenceByCaseId = async (req, res, next) => {
  const { caseId } = req.params;

  try {
    const evidence = await EvidenceModel.find({ caseId });
    res.status(200).json(evidence);
  } catch (error) {
    console.error(`Error getting evidence for case: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Ajouter une nouvelle preuve numérique
exports.addEvidence = async (req, res, next) => {
  const { description, fileUrl, caseId, uploadedBy } = req.body;

  try {
    const newEvidence = new EvidenceModel({ description, fileUrl, caseId, uploadedBy });
    const savedEvidence = await newEvidence.save();
    res.status(201).json(savedEvidence);
  } catch (error) {
    console.error(`Error adding evidence: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
