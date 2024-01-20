const express = require("express");
const router = express.Router();
const evidenceController = require("../controllers/evidenceController");
const multer = require("multer");

// Configuration Multer pour le téléchargement de fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Routes pour la gestion des preuves numériques
router.get("/evidence", evidenceController.getAllEvidences);
router.get("/evidence/:caseId", evidenceController.getEvidenceByCaseId);
router.post("/evidence", evidenceController.addEvidence);
// Route pour télécharger, stocker, marquer et gérer des preuves numériques
router.post(
  "/evidence/upload",
  upload.single("file"),
  evidenceController.uploadEvidence
);

module.exports = router;
