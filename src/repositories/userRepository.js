// src/repositories/userRepository.js
import User from '../models/user.js';
import crudRepository from './crudRepository.js';

const userRepository = {
  ...crudRepository(User),

  findByEmail: async (email) => {
    return User.findOne({ email });
  },

  createAdminUser: async (data) => {
    const user = new User(data);
    await user.save();
    return user;
  },
};

export default userRepository;
