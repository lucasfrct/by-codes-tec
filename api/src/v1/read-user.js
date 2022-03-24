const { User } = require('../models');

module.exports = async(req, res) => {
  const user = await User.findByPk(req.params.id) || {};
  res.json(user);
}