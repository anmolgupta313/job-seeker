const { Schema, model } = require("mongoose");

const savedJobSchema = new Schema({
  title: String,
  img: String,
  employerName: String,
  location: String,
  jobId: String,
});

const SavedJobs = model("savedJobs", savedJobSchema);

module.exports = SavedJobs;
