const { User } = require('../models');

module.exports = async(req, res) => {
  const user = await User.create(req.body) || {};
  res.json(user);
}	