import mongoose from 'mongoose';

import app from './api/app';

const port = 3001;

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost/github-tracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Mongo connected');
  } catch (err) {
    console.error(err);
  }

  app.listen(port, () => {
    console.log(`Server on port ${port}`);
  });
};

start();
