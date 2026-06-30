const express = require('express');
const router = express.Router();
const { getAllProjects, createProject, deleteProject } = require('../controllers/projectController');
const protect = require('../middleware/auth');

router.route('/').get(getAllProjects).post(protect, createProject);
router.route('/:id').delete(protect, deleteProject);

module.exports = router;