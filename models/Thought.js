const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    length: [1, 280],
  },
  createdAt: {
    type: Date,
    default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000)
    // getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      // activity 25 for its own file
      type: Schema.Types.ObjectId
    }
  ]
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;