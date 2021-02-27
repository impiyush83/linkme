const userRepository = require('../repositories/userRepository');

const userService = {};

userService.addUser= async (user) => {
  await userRepository.insertUser({userName: user.userName});
}

module.exports = userService;
