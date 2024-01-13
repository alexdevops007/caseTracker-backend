const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Routes pour la génération de rapports
router.get('/reports/:caseId', reportController.getReportsByCaseId);
router.post('/reports', reportController.generateReport);

module.exports = router;
