// seed.js
const mongoose = require('mongoose');

// Use an environment variable for MongoDB host (default to localhost)
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';
const dbName = process.env.MONGO_DB || 'devops';

const mongoURI = `mongodb://${mongoHost}:${mongoPort}/${dbName}`;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to MongoDB at ${mongoURI}`);

    // Define schema and model
    const Dev = mongoose.model('Dev', { name: String });

    // Seed data
    return Dev.insertMany([
      { name: 'Team A' },
      { name: 'Team B' },
      { name: 'Team C' }
    ]);
  })
  .then(() => {
    console.log('Database seeded successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    process.exit(1);
  });

