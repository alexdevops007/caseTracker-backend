const CommunicationModel = require('../models/CommunicationModel');

// Récupérer toutes les communications d'un cas
exports.getCommunicationsByCaseId = async (req, res, next) => {
  const { caseId } = req.params;

  try {
    const communications = await CommunicationModel.find({ caseId });
    res.status(200).json(communications);
  } catch (error) {
    console.error(`Error getting communications for case: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Ajouter une nouvelle communication
exports.addCommunication = async (req, res, next) => {
  const { sender, message, caseId } = req.body;

  try {
    const newCommunication = new CommunicationModel({ sender, message, caseId });
    const savedCommunication = await newCommunication.save();
    res.status(201).json(savedCommunication);
  } catch (error) {
    console.error(`Error adding communication: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
