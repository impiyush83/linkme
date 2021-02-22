const db = require('../dao/models')

const userRepository = {};

userRepository.insertUser = async (user) => {
  await db.users.create(user);
};

userRepository.findUser = async (query) => {
  await db.users.findOne(query);
};

module.exports = userRepository;
