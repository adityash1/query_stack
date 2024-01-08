import * as mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("missing mongodb url");
  }

  if (!isConnected) {
    return console.log("mongodb is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "overflow",
    });

    isConnected = true;
  } catch (e) {
    console.log("mongodb connection failed", e);
  }
};
