const { Schema, model } = require("mongoose");
// const Users = require("./users");
const mongoose = require("mongoose")


const savedJobSchema = new Schema({
  title: String,
  img: String,
  employerName: String,
  location: String,
  jobId: String,
  user: {type: mongoose.Types.ObjectId, ref: "Users"}
});

const SavedJobs = model("savedJobs", savedJobSchema);

module.exports = SavedJobs;
