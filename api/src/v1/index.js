const router = require('express').Router();

const { User } = require('../models');

router.get('/users', async(req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/users', async(req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.get('/users/:id', async(req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});


router.put('/users/:id', async(req, res) => {
  const user = await User.findByPk(req.params.id);
  user.email = "asdf@asdf@asdf@.com"
  const resultadoSave = await user.save();
  res.json(resultadoSave);

});

router.delete('/users/:id', async(req, res) => {
  const user = await User.findByPk(req.params.id);
  const result = await user.destroy();
  res.json(result);
});

router.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});


module.exports = router;