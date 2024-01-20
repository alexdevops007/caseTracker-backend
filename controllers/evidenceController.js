const EvidenceModel = require("../models/EvidenceModel");

// Récupérer toutes les preuves numériques
exports.getAllEvidences = async (req, res, next) => {
  try {
    const evidences = await EvidenceModel.find();
    res.status(200).json(evidences);
  } catch (error) {
    console.error(`Error getting cases: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Récupérer toutes les preuves numériques d'un cas
exports.getEvidenceByCaseId = async (req, res, next) => {
  const { caseId } = req.params;

  try {
    const evidence = await EvidenceModel.find({ caseId });
    res.status(200).json(evidence);
  } catch (error) {
    console.error(`Error getting evidence for case: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Ajouter une nouvelle preuve numérique
exports.addEvidence = async (req, res, next) => {
  const { description, fileUrl, caseId, uploadedBy } = req.body;

  try {
    const newEvidence = new EvidenceModel({
      description,
      fileUrl,
      caseId,
      uploadedBy,
    });
    const savedEvidence = await newEvidence.save();
    res.status(201).json(savedEvidence);
  } catch (error) {
    console.error(`Error adding evidence: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fonction pour télécharger, stocker, marquer et gérer des preuves numériques
exports.uploadEvidence = async (req, res) => {
  try {
    // Logique pour télécharger, stocker, marquer et gérer la preuve numérique
    const { caseId, description, uploadedBy } = req.body;
    const file = req.file;

    // Enregistrez la preuve dans la base de données
    const evidence = await EvidenceModel.create({
      caseId,
      fileName: file.originalname,
      fileUrl: file.path,
      description,
      uploadedBy,
    });
    res.status(201).json({ success: true, evidence });
  } catch (error) {
    console.error("Erreur lors de la gestion de la preuve numérique: ", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
