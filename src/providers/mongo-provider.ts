import mongoose from 'mongoose';

async function connectToMongoDb() {
  await mongoose.connect(String(process.env.MONGOOSE_URL));
}

export default connectToMongoDb;
