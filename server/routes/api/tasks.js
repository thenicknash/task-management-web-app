const express = require('express');
const { v1: uuidv1 } = require('uuid');

const router = express.Router();

// Default tasks for testing
let tasks = [
  {
    id: uuidv1(),
    name: 'Fix Production Bug',
    description: 'Fix a daunting bug that has been haunting the production code base since its inception.',
    dueDate: '02/21/22',
    status: 'New'
  },
  {
    id: uuidv1(),
    name: 'Create Awesome Feature',
    description: 'This is the best feature since sliced bread.',
    dueDate: '03/01/22',
    status: 'New'
  },
  {
    id: uuidv1(),
    name: 'Resolve Latency Issue',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    dueDate: '01/30/22',
    status: 'Completed'
  },
];

// List all new & completed tasks
router.get('/', async (req, res) => {
  res.send(tasks);
});

// Create a new task
router.post('/', async (req, res) => {
  // Validate input
  if (!req.body.name) res.status(400).send('Name is required!');

  if (!req.body.description) res.status(400).send('Description is required!');

  if (!req.body.dueDate) res.status(400).send('Due Date is required!');

  // TODO: extra date validation

  const task = {
    id: uuidv1(),
    name: req.body.name,
    description: req.body.description,
    dueDate: req.body.dueDate,
    status: 'New'
  };
  tasks.push(task);
  res.status(200).send(task);
});

// View details of a single task
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) res.status(404).send('No task found with the given ID!');
  res.send(task);
});

// Update a task's details
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) res.status(404).send('No task found with the given ID!');

  // Validate input
  if (!req.body.name) res.status(400).send('Name is required!');

  if (!req.body.description) res.status(400).send('Description is required!');

  if (!req.body.dueDate) res.status(400).send('Due Date is required!');

  if (!req.body.status) res.status(400).send('Status is required!');

  task.name = req.body.name;
  task.description = req.body.description;
  task.dueDate = req.body.dueDate;
  task.status = req.body.status;
  res.send(task);
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) res.status(404).send('No task found with the given ID!');

  const index = tasks.indexOf(task);
  tasks.splice(index, 1);

  res.status(200).send(task);
});


module.exports = router;