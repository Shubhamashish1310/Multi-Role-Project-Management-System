// src/services/authService.js
import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository.js';
import companyRepository from '../repositories/companyRepository.js';
import { createAccessToken, createRefreshToken } from '../utils/authUtils.js';

export const registerCompanyService = async (data) => {
  const { companyName, companyDomain, adminName, adminEmail, adminPassword } = data;
  console.log(data)

  const existingCompany = await companyRepository.findByDomain(companyDomain);
  if (existingCompany) {
    throw {
      message: 'Company already exists',
      statusCode: 400,
    };
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const newCompany = await companyRepository.create({
    name: companyName,
    domain: companyDomain,
  });

  const newAdmin = await userRepository.createAdminUser({
    name: adminName,
    email: adminEmail,
    password: hashedPassword,
    role: 'Admin',
    company: newCompany._id,
  });

  return {
    company: {
      id: newCompany._id,
      name: newCompany.name,
      domain: newCompany.domain,
    },
    admin: {
      id: newAdmin._id,
      name: newAdmin.name,
      email: newAdmin.email,
    },
  };
};

export const loginService = async (data) => {
    const { email, password } = data;
  
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw {
        statusCode: 404,
        message: 'No user found with this email',
      };
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw {
        statusCode: 400,
        message: 'Invalid password',
      };
    }
  
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
      company: user.company,
    };
  
    return {
      accessToken: createAccessToken(payload),
      refreshToken: createRefreshToken(payload),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
      },
    };
  };

  export const createUserService = async (data, currentUser) => {
    const { name, email, password, role } = data;
  
    if (!['Manager', 'Member'].includes(role)) {
      throw { statusCode: 400, message: 'Invalid role. Must be Manager or Member.' };
    }
  
    const existing = await userRepository.findByEmail(email);
    if (existing) {
      throw { statusCode: 400, message: 'User with this email already exists' };
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const newUser = await userRepository.createAdminUser({
      name,
      email,
      password: hashedPassword,
      role,
      company: currentUser.company, // ✅ user must belong to same company as admin
    });
  
    return {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      company: newUser.company,
    };
  };
  