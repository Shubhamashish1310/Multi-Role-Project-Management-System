import Project from '../models/project.js';
import crudRepository from './crudRepository.js';

const getProjectsByCompany = async (companyId) => {
  return Project.find({ company: companyId });
};

const projectRepository = {
  ...crudRepository(Project),

  getProjectsByCompany,
};

export default projectRepository;
