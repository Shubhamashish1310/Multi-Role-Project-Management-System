import projectRepository from '../repositories/projectRepository.js';

export const createProjectService = async (data, currentUser) => {
  const { name, description } = data;

  const newProject = await projectRepository.create({
    name,
    description,
    company: currentUser.company,
    createdBy: currentUser.id,
  });

  return {
    id: newProject._id,
    name: newProject.name,
    description: newProject.description,
  };
};

export const getProjectsService = async (currentUser) => {
  const projects = await projectRepository.getProjectsByCompany(currentUser.company);
  return projects.map((project) => ({
    id: project._id,
    name: project.name,
    description: project.description,
  }));
};

export const updateProjectService = async (id, data, currentUser) => {
  const project = await projectRepository.getById(id);

  if (!project || project.company.toString() !== currentUser.company) {
    throw { statusCode: 404, message: 'Project not found or access denied' };
  }

  const updated = await projectRepository.update(id, data);
  return {
    id: updated._id,
    name: updated.name,
    description: updated.description,
  };
};

export const deleteProjectService = async (id, currentUser) => {
  const project = await projectRepository.getById(id);

  if (!project || project.company.toString() !== currentUser.company) {
    throw { statusCode: 404, message: 'Project not found or access denied' };
  }

  await projectRepository.delete(id);
  return { message: 'Project deleted successfully' };
};
