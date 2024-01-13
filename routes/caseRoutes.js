const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

// Routes pour les cas d'enquête
router.get('/cases', caseController.getAllCases);
router.post('/cases', caseController.createCase);
router.get('/cases/:caseId', caseController.getCaseById);
router.put('/cases/:caseId', caseController.updateCaseById);
router.delete('/cases/:caseId', caseController.deleteCaseById);

module.exports = router;
