const router = require('express').Router();
const {
  // insert added methods
  getThoughts,
  createThought,
  getSingleThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:id
router.route('/:id').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions/:
router.route('/:id/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:id
router.route('/:thoughtId/reactions/:id').delete(deleteReaction);

module.exports = router;