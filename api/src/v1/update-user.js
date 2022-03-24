const { User } = require('../models');

module.exports = async(req, res) => {
  const user = await User.findByPk(req.params.id);
  user.email = "asdf@asdf@asdf@.com"
  const resultadoSave = await user.save() || {};
  res.json(resultadoSave);

}