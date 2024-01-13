const mongoose = require('mongoose');

// Définition du schéma pour le modèle de génération de rapports
const reportSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Case',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  generatedBy: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle de génération de rapports à partir du schéma
const ReportModel = mongoose.model('Report', reportSchema);

module.exports = ReportModel;
