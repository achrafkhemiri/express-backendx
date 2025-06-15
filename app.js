// app.js
const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasks');

app.use(express.json());
app.use('/api/tasks', tasksRoutes);
// Ajoute la route d'accueil ici
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API Express ! Utilisez /api/tasks');
});

module.exports = app;
