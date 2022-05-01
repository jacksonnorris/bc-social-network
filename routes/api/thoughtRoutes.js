const router = require('express').Router();
const {
  // insert added methods
  getThoughts,
  createThought,
  getSingleThought,
  deleteThought
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:id
router.route('/:id').get(getSingleThought).delete(deleteThought);

module.exports = router;