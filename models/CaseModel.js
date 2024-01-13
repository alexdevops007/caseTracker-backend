const mongoose = require('mongoose');

// Définition du schéma pour le modèle de cas d'enquête
const caseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'InProgress', 'Closed'],
    default: 'Pending',
  },
  evidence: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Evidence',
    },
  ],
  tasks: [
    {
      description: String,
      dueDate: Date,
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle de cas d'enquête à partir du schéma
const CaseModel = mongoose.model('Case', caseSchema);

module.exports = CaseModel;
