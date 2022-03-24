const router = require('express').Router();

const Healthz = require('./healthz');

const ListUsers = require('./list-users');
const CreateUser = require('./create-user');
const ReadUser = require('./read-user');
const UpdateUser = require('./update-user');
const DeleteUser = require('./delete-user');

const CreateCnabs = require('./create-cnabs');
const ListCnabs = require('./list-cnabs');
const ListCnabsByCpf = require('./list-cnabs-by-cpf');
const ReadCnab = require('./read-cnab');
const UpdateCnab = require('./update-cnab');
const DeleteCnab = require("./delete-cnab")

// health check
router.get("/healthz", Healthz);

// list Users
router.get('/users', ListUsers);

// create user
router.post('/user', CreateUser);

// read user
router.get('/user/:id', ReadUser);

// update user
router.put('/user/:id', UpdateUser);

// delete user
router.delete('/user/:id', DeleteUser);

// create cnabs
router.post('/cnabs', CreateCnabs);	

// list all cnabs
router.get('/cnabs', ListCnabs);	

// list cnabs by cpf
router.get('/cnabs/:cpf', ListCnabsByCpf);	

// read cnab by id
router.get('/cnab/:id', ReadCnab);	

// update cnabs by id
router.put('/cnab/:id', UpdateCnab);

// delete cnab by Id
router.delete('/cnab/:id', DeleteCnab);	




module.exports = router;