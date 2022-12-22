import mongoose, { mongo } from "mongoose";

const URI_MONGO = process.env.URI_MONGO;

const connectDB = async () => {
  try {
    await mongoose.connect(URI_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
    console.log("Mongo DB conectado!!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
