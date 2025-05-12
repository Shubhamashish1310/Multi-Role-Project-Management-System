// src/controllers/authController.js
import { registerCompanyService } from '../services/authService.js';
import { loginService } from '../services/authService.js';
import { createUserService } from '../services/authService.js';

export const login = async (req, res) => {
    try {
      const result = await loginService(req.body);
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        data: result,
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'Login failed',
      });
    }
  };


export const registerCompany = async (req, res) => {
  try {
    // ✅ THIS is important!
    const result = await registerCompanyService(req.body);

    return res.status(201).json({
      success: true,
      message: 'Company registered successfully',
      data: result
    });
  } catch (error) {
    console.log('Register error:', error);
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'Something went wrong',
    });
  }
};

export const createUser = async (req, res) => {
    try {
      const result = await createUserService(req.body, req.user); // req.user comes from JWT
      return res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: result,
      });
    } catch (error) {
      console.error('Create user error:', error);
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'Something went wrong',
      });
    }
  };