import {
    createProjectService,
    getProjectsService,
    updateProjectService,
    deleteProjectService,
  } from '../services/projectService.js';
  
  export const createProject = async (req, res) => {
    try {
      const result = await createProjectService(req.body, req.user);
      return res.status(201).json({ success: true, message: 'Project created', data: result });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
  };
  
  export const getProjects = async (req, res) => {
    try {
      const result = await getProjectsService(req.user);
      return res.status(200).json({ success: true, message: 'Projects fetched', data: result });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
  };
  
  export const updateProject = async (req, res) => {
    try {
      const result = await updateProjectService(req.params.id, req.body, req.user);
      return res.status(200).json({ success: true, message: 'Project updated', data: result });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
  };
  
  export const deleteProject = async (req, res) => {
    try {
      const result = await deleteProjectService(req.params.id, req.user);
      return res.status(200).json({ success: true, message: result.message });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ success: false, message: error.message });
    }
  };
  