const express = require('express');
const userRoutes = require('./users.routes');
const roleRoutes = require('./roles.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/roles', roleRoutes);

module.exports = router


