// src/routes/authRoutes.js
import express from 'express';
import { registerCompany,login,createUser } from '../controllers/authController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';
import { listUsers } from '../controllers/authController.js';
const router = express.Router();

router.post('/register-company', registerCompany);

router.post('/login', login); // ✅ new
//for chceking if the route is working

router.post('/users', authenticate, authorizeRoles('Admin'), createUser);


router.get('/users',authenticate,authorizeRoles('Admin'),listUsers
  );
router.get('/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Auth route is working',
  });
});

export default router;
