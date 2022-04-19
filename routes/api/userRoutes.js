const router = require('express').Router();
const {
  // insert added methods
  getUsers,
  createUser
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

module.exports = router;