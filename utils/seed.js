const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

const users = [];

connection.once('open', async () => {
  // await drop existing dbs
  users.push({
    username: "user1",
    email: "user@email.com",
    thoughts: [],
    friends: []
  });

  await User.collection.insertMany(users);

  console.table(users);
  console.info('data seeded!')
  process.exit(0);
});
