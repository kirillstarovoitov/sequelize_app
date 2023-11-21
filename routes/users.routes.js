const express = require('express');
const UserController = require('../controllers/users.controller');

const router = express.Router();

router
    .route('/')
    .get(UserController.getUsers)
    // .post(UserController.createUser)
    // .put(UserController.updateUser)
    // .delete(UserController.deleteUser);

router.route('/:id').get(UserController.getUser);

module.exports = router
