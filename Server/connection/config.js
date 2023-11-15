const { connect, connection } = require("mongoose");

connect("mongodb://localhost/jobSeeker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
