const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

const users = [];
const thoughts = [];

connection.once('open', async () => {

  await User.deleteMany({});
  await Thought.deleteMany({});

  users.push({
    username: "user1",
    email: "user@email.com",
    thoughts: [],
    friends: []
  });

  await User.collection.insertMany(users);

  thoughts.push({
    thoughtText: "Hello world, this is my first post thought!",
    username: "user1"
  });

  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.info('data seeded!')
  process.exit(0);
});
