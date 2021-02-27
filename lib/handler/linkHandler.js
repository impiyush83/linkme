const linkService = require('../services/linkService')

const linkHandler = {};

linkHandler.addLink =  async (req, res) => {
  try {
    await linkService.addLink(req.body)
    return res.status(200).json({
      success: true,
      message: 'Success'
    })
  } catch {
    return res.status(400).json({"message": "Error in adding links for user"})
  };
}

module.exports = linkHandler;
