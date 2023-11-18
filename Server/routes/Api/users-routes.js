const router = require("express").Router();


const { Users } = require("../../models");
const bcrypt = require("bcrypt");
const { createTokens, validateToken } = require("../../jwt/jwt");
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
    const hash = bcrypt.hashSync(req.body.password, 10);
    const postUser = await Users.create({
      email: req.body.email,
      password: hash,
    });
    res.status(200).json(postUser);
  } catch (error) {
    res.status(500).json(err);
  }
});


router.post("/login", async (req, res) => {
  try {
    // const {userName,password}= req.body
    const loginUser = await Users.findOne({email:req.body.email},
    );

    if (!loginUser) {
      res.status(400).json({ err: "Wrong Email" });
    }

    const dbPassword = loginUser.password;

    bcrypt.compare(req.body.password, dbPassword).then((match) => {
      if (!match) {
        res.status(400).json({ message: "Wrong Password" });
      } else {
        const accessToken = createTokens(loginUser);

        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
        });
        // console.log(loginUser.dataValues.userName,"dloginatavalues");
        res.status(200).json({
          user: loginUser.email,
          token: accessToken,
        });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
