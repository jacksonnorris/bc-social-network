const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        return res.json(users);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found" })
          : Thought.findOneAndUpdate(
            {
              users: req.params.id
            },
            {
              $pull: { users: req.params.id }
            },
            {
              new: true
            },

            // res.json({ message: 'User deleted' })
          )
            .then((thoughts) =>
              !thoughts
                ? res.status(404).json({
                  message: 'User deleted, but no thoughts were deleted'
                })
                : res.json({ message: 'User deleted' })
            )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
}