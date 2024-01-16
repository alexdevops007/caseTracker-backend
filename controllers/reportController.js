const ReportModel = require("../models/ReportModel");
const PDFDocument = require("pdfkit");

// Récupérer tous les rapports d'un cas
exports.getReportsByCaseId = async (req, res, next) => {
  const { caseId } = req.params;

  try {
    const reports = await ReportModel.find({ caseId });
    res.status(200).json(reports);
  } catch (error) {
    console.error(`Error getting reports for case: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fonction pour générer un rapport PDF
exports.generateReport = async (req, res) => {
  try {
    const doc = new PDFDocument();
    // Logique pour la génération du rapport
    const newReport = new ReportModel({ content, caseId, generatedBy });
    const savedReport = await newReport.save();
    res.status(201).json(savedReport);

    // PDF généré
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=report.pdf");
    doc.pipe(res);

    // Ajout le contenu du rapport ici
    doc.text("Rapport généré avec succès.");
    doc.end();
  } catch (error) {
    console.error("Erreur lors de la génération du rapport: ", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
