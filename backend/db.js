const mongoose = require("mongoose");

const url =
  "mongodb://hemant:hemant123@moviedb-shard-00-00.hm4bb.mongodb.net:27017,moviedb-shard-00-01.hm4bb.mongodb.net:27017,moviedb-shard-00-02.hm4bb.mongodb.net:27017/?ssl=true&replicaSet=atlas-h6q7pr-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
