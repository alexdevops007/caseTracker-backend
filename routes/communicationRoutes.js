const express = require('express');
const router = express.Router();
const communicationController = require('../controllers/communicationController');

// Routes pour la communication en temps réel
router.get('/communications/:caseId', communicationController.getCommunicationsByCaseId);
router.post('/communications', communicationController.addCommunication);

module.exports = router;
