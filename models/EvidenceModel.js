const mongoose = require('mongoose');

// Définition du schéma pour le modèle de gestion des preuves numériques
const evidenceSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Case',
    required: true,
  },
  uploadedBy: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle de gestion des preuves numériques à partir du schéma
const EvidenceModel = mongoose.model('Evidence', evidenceSchema);

module.exports = EvidenceModel;
