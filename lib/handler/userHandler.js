const userService = require('../services/userService')

const userHandler = {};

userHandler.addUser =  async (req, res) => {
  try {
    await userService.addUser(req.body)
    return res.status(200).json({
      success: true,
      message: 'Success'
    })
  } catch {
    return res.status(400).json({"message": "Error in adding user"})
  };
}

module.exports = userHandler;
