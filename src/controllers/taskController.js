import {
    createTaskService,
    getTasksService,
    updateTaskService,
    deleteTaskService
  } from '../services/taskService.js';
  
  export const createTask = async (req, res) => {
    try {
      const result = await createTaskService(req.body, req.user);
      return res.status(201).json({ success: true, message: 'Task created', data: result });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
  };
  
  export const getTasks = async (req, res) => {
    try {
      const result = await getTasksService(req.user, req.query);
      return res.status(200).json({ success: true, message: 'Tasks fetched', data: result });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
  };
  
  export const updateTask = async (req, res) => {
    try {
      const result = await updateTaskService(req.params.id, req.body, req.user);
      return res.status(200).json({ success: true, message: 'Task updated', data: result });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
  };
  
  export const deleteTask = async (req, res) => {
    try {
      const result = await deleteTaskService(req.params.id, req.user);
      return res.status(200).json({ success: true, message: result.message });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
  };
  