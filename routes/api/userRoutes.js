const router = require('express').Router();
const {
  // insert added methods
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:id/friends/:id
router.route('/:userId/friends/:id').post(addFriend);

// /api/users/:id/friends/:id
router.route('/:userId/friends/:id').delete(deleteFriend);



module.exports = router;