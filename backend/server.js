const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data', 'projects.json');

app.get('/api/projects', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lecture JSON:', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    try {
      const projects = JSON.parse(data);
      res.json(projects);
    } catch (parseErr) {
      console.error('Erreur parse JSON:', parseErr);
      res.status(500).json({ message: 'Erreur données' });
    }
  });
});

app.get('/api/projects/:id', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lecture JSON:', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    try {
      const projects = JSON.parse(data);
      const project = projects.find((p) => String(p.id) === req.params.id);
      if (!project) {
        return res.status(404).json({ message: 'Projet introuvable' });
      }
      res.json(project);
    } catch (parseErr) {
      console.error('Erreur parse JSON:', parseErr);
      res.status(500).json({ message: 'Erreur données' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Backend portfolio écoutant sur port ${PORT}`);
});

