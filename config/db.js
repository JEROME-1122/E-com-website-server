import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MongodbUrl).then((data) => {
      console.log("Connected to MongoDB on", data.connection.host);
    });

 
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectToDatabase;
