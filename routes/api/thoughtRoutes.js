const router = require('express').Router();
const {
  // insert added methods
  getThoughts,
  createThought
} = require('../../controllers/thoughtController.js');

// /api/users
router.route('/').get(getThoughts).post(createThought);

module.exports = router;