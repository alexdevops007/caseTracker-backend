const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongodb = require("./database/mongodb");

const http = require("http");
const socketIo = require("socket.io");

const caseRoutes = require('./routes/caseRoutes');
const communicationRoutes = require('./routes/communicationRoutes');
const evidenceRoutes = require('./routes/evidenceRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
const config = require("./config");

dotenv.config();

// Création d'un serveur HTTP à partir de l'application Express
const server = http.createServer(app);
const io = socketIo(server);

// Middleware pour utiliser socket.io
app.use((req, res, next) => {
    req.io = io;
    next();
});

// Configuration de la gestion des connexions WebSocket
io.on('connection', (socket) => {
    console.log(`Nouvelle connexion WebSocket: ${socket.id}`)
})

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'api CaseTracker");
});
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Bienvenue sur l'api CaseTracker",
  });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erreur serveur");
});

// Routes app
app.use('/api', caseRoutes);
app.use('/api', communicationRoutes);
app.use('/api', evidenceRoutes);
app.use('/api', reportRoutes);

server.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}🕺😊☄️☀️`.bgMagenta)
);
