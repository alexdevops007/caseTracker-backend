const express = require("express");
const router = express.Router();
const evidenceController = require("../controllers/evidenceController");

// Routes pour la gestion des preuves numériques
router.get('/evidences', evidenceController.getAllEvidences);
router.get("/evidence/:caseId", evidenceController.getEvidenceByCaseId);
router.post("/evidence", evidenceController.addEvidence);
router.post("/evidence/upload", evidenceController.uploadEvidence);

module.exports = router;
