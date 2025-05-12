import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', authenticate, authorizeRoles('Admin', 'Manager'), createTask);
router.get('/', authenticate, getTasks); // all roles can view (filtered)
router.put('/:id', authenticate, authorizeRoles('Admin', 'Manager', 'Member'), updateTask);
router.delete('/:id', authenticate, authorizeRoles('Admin', 'Manager'), deleteTask);

export default router;
