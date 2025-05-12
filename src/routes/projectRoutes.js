import express from 'express';
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', authenticate, authorizeRoles('Admin', 'Manager'), createProject);
router.get('/', authenticate, authorizeRoles('Admin', 'Manager'), getProjects);
router.put('/:id', authenticate, authorizeRoles('Admin', 'Manager'), updateProject);
router.delete('/:id', authenticate, authorizeRoles('Admin', 'Manager'), deleteProject);

export default router;
