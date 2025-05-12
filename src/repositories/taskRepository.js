import Task from '../models/task.js';
import crudRepository from './crudRepository.js';

const getTasksByCompany = async (companyId) => {
  return Task.find({ company: companyId });
};

const getTasksWithFilters = async (companyId, filters) => {
  const query = { company: companyId, ...filters };
  return Task.find(query).populate('assignedTo', 'name email').populate('project', 'name');
};

const taskRepository = {
  ...crudRepository(Task),

  getTasksByCompany,
  getTasksWithFilters,
};

export default taskRepository;
