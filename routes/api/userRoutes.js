const router = require('express').Router();
const {
  // insert added methods
  getUsers,
  createUser,
  getSingleUser,
  deleteUser
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getSingleUser).delete(deleteUser);

module.exports = router;