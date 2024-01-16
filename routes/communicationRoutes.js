const express = require('express');
const router = express.Router();
const communicationController = require('../controllers/communicationController');

// Routes pour la communication en temps réel
router.get('/communications/:caseId', communicationController.getCommunicationsByCaseId);
router.post('/communications', communicationController.addCommunication);
router.post('/send-message', (req, res) => {
    const { message } = req.body;

    // Envoyer le message à tous les clients connectés via WebSocket
    req.io.emit('new-message', { message });

    res.status(200).json({ success: true })
})

module.exports = router;
