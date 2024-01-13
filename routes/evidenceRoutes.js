const express = require('express');
const router = express.Router();
const evidenceController = require('../controllers/evidenceController');

// Routes pour la gestion des preuves numériques
router.get('/evidence/:caseId', evidenceController.getEvidenceByCaseId);
router.post('/evidence', evidenceController.addEvidence);

module.exports = router;
