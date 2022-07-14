const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("MongoDb Connection Successful");
    })

    .catch((error) => {
      console.log(`can not connect to database, ${error}`);
    });
};

module.exports = connectDatabase;
