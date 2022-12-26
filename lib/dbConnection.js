// import { connect, connection } from "mongoose";

// const URI_MONGO = process.env.URI_MONGO;

// if (!URI_MONGO) {
//   throw new Error(
//     "Please define the URI_MONGO environment variable inside .env.local"
//   );
// }

// const conn = {
//   isConnected: false,
// };

// export async function connectDB() {
//   if (conn.isConnected) return;
//   const db = await connect(URI_MONGO);
//   conn.isConnected = db.connections[0].readyState;
//   console.log(db.connection.db.databaseName);
// }
// connection.on("connected", () => {
//   console.log("MongoDB is connected");
// });
// connection.on("error", (err) => {
//   console.log(err);
// });

import mongoose from "mongoose";
const URI_MONGO = process.env.URI_MONGO;

const connectDB = async () => {
  try {
    await mongoose.connect(URI_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
    console.log("Mongo is connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
