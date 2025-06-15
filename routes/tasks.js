// routes/tasks.js
const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: 'Apprendre Jenkins', done: false },
  { id: 2, title: 'Créer pipeline', done: false }
];

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    done: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
