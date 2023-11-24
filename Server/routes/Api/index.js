const userRoutes = require("./users-routes");
const savedJobRoute= require('./savedJob-routes')
const router = require("express").Router();

router.use("/user", userRoutes);
router.use('/savedJob', savedJobRoute)

module.exports = router;
