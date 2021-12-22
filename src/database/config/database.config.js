import mongoose  from "mongoose";
import config from "../connection/prod/config";

(async () => {
  const db = await mongoose
    .connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("DB is connected... ",db.connection.name))
    .catch((err) => console.log("Error: ", err));
})();
