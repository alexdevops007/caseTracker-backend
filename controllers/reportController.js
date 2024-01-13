const ReportModel = require('../models/ReportModel');

// Récupérer tous les rapports d'un cas
exports.getReportsByCaseId = async (req, res, next) => {
  const { caseId } = req.params;

  try {
    const reports = await ReportModel.find({ caseId });
    res.status(200).json(reports);
  } catch (error) {
    console.error(`Error getting reports for case: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Générer un nouveau rapport
exports.generateReport = async (req, res, next) => {
  const { content, caseId, generatedBy } = req.body;

  try {
    const newReport = new ReportModel({ content, caseId, generatedBy });
    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (error) {
    console.error(`Error generating report: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
