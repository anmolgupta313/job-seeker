const router = require("express").Router();

const { Users } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const getUsers = await Users.find();

    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const postUser = await Users.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(postUser);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
