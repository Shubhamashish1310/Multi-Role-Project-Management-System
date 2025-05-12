// src/repositories/companyRepository.js
import Company from '../models/company.js';
import crudRepository from './crudRepository.js';

const companyRepository = {
  ...crudRepository(Company),

  findByDomain: async (domain) => {
    return Company.findOne({ domain });
  },
};

export default companyRepository;
