const userRoutes = require("./users-routes");

const router = require("express").Router();

router.use("/user", userRoutes);

module.exports = router;
