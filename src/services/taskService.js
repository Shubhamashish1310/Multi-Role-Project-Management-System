import taskRepository from '../repositories/taskRepository.js';

export const createTaskService = async (data, currentUser) => {
  const { title, description, status, project, assignedTo } = data;

  const newTask = await taskRepository.create({
    title,
    description,
    status,
    project,
    assignedTo,
    company: currentUser.company,
    createdBy: currentUser.id,
  });

  return {
    id: newTask._id,
    title: newTask.title,
    description: newTask.description,
    status: newTask.status,
  };
};

export const getTasksService = async (currentUser, query) => {
    const filters = {};
    if (query.status) filters.status = query.status;
    if (query.assignedTo) filters.assignedTo = query.assignedTo;
  
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
  
    const { tasks, total } = await taskRepository.getTasksWithFilters(currentUser.company, filters, page, limit);
  
    const formatted = tasks.map(task => ({
      id: task._id,
      title: task.title,
      description: task.description,
      status: task.status,
      project: task.project?.name || null,
      assignedTo: task.assignedTo?.email || null,
    }));
  
    return {
      tasks: formatted,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  };
  

export const updateTaskService = async (id, data, currentUser) => {
  const task = await taskRepository.getById(id);

  const isMember = currentUser.role === 'Member';

  if (!task || task.company.toString() !== currentUser.company) {
    throw { statusCode: 404, message: 'Task not found or access denied' };
  }

  if (isMember && task.assignedTo.toString() !== currentUser.id) {
    throw { statusCode: 403, message: 'Members can only update their own tasks' };
  }

  const updated = await taskRepository.update(id, data);
  return {
    id: updated._id,
    title: updated.title,
    status: updated.status,
  };
};

export const deleteTaskService = async (id, currentUser) => {
  const task = await taskRepository.getById(id);

  if (!task || task.company.toString() !== currentUser.company) {
    throw { statusCode: 404, message: 'Task not found or access denied' };
  }

  await taskRepository.delete(id);
  return { message: 'Task deleted successfully' };
};


  
