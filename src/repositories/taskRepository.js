import Task from '../models/task.js';
import crudRepository from './crudRepository.js';

const getTasksByCompany = async (companyId) => {
  return Task.find({ company: companyId });
};

const getTasksWithFilters = async (companyId, filters, page = 1, limit = 10) => {
    const query = { company: companyId, ...filters };
  
    const skip = (page - 1) * limit;
  
    const tasks = await Task.find(query)
      .skip(skip)
      .limit(limit)
      .populate('assignedTo', 'name email')
      .populate('project', 'name');
  
    const total = await Task.countDocuments(query);
  
    return { tasks, total };
  };
  


const taskRepository = {
  ...crudRepository(Task),

  getTasksByCompany,
  getTasksWithFilters,
};

export default taskRepository;
