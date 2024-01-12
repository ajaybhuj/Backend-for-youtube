// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log("mongodb error: " + error);
  });

/*
import { Express } from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error connecting", error);
      throw error;
    });
    app.listen(process.allowedNodeEnvironmentFlags.PORT, () => {
      console.log(` App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error", error);
  }
})();

*/
