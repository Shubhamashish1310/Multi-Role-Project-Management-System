// src/validations/authValidation.js
import { body } from 'express-validator';

export const registerCompanyValidation = [
  body('companyName').notEmpty().withMessage('Company name is required'),
  body('companyDomain').isEmail().withMessage('Domain must be valid email format'), // adjust if not email
  body('adminName').notEmpty().withMessage('Admin name is required'),
  body('adminEmail').isEmail().withMessage('Valid admin email is required'),
  body('adminPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

export const loginValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];
