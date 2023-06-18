import mongoose from 'mongoose';
import app from './app';
import config from './config';

process.on('uncaughtException', error => {
  console.log('Uncaught exception is detected....', error);
  process.exit(1);
});

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database is connected successfully....`);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to connected....');
  }
}

main();
