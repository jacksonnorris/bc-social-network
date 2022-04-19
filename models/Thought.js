const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    length: [1, 280],
  },
  createdAt: {
    type: Date,
    // add default
    // getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: Schema.Types.ObjectId
    }
  ]
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;