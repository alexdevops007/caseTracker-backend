const mongoose = require('mongoose');

// Définition du schéma pour le modèle de communication en temps réel
const communicationSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Case',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle de communication en temps réel à partir du schéma
const CommunicationModel = mongoose.model('Communication', communicationSchema);

module.exports = CommunicationModel;
