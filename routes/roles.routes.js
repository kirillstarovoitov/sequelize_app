const express = require('express');
const RoleController = require('../controllers/roles.controller');

const router = express.Router();

router
    .route('/')
    .get(RoleController.getRoles)
    .post(RoleController.createRole)
    .put(RoleController.updateRole)
    .delete(RoleController.deleteRole);

router.route('/:id').get(RoleController.getRole);

module.exports = router
