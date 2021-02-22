const db = require('../dao/models')
const ErrorUtil = require('../util/error')
const userRepository = require('../repositories/userRepository');

const userService = {};

userService.addUser= async (user) => {
  await userRepository.insertUser({userName: user.userName});
}

module.exports = userService;
