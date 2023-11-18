const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();
const createTokens = (loginUser) => {
  const accessToken = sign(
    { email: loginUser.email, id: loginUser.id },
    process.env.JWT_Secret
  );
  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken) {
    return res.status(400).json({ message: "User npt auth" });
  }

  try {
    const validToken = verify(accessToken, process.env.JWT_Secret);

    if (validToken) {
      req.authenticated = true;

      return next();
    }
  } catch (err) {
    return res.satatus(500).json(err);
  }
};
module.exports = { createTokens, validateToken };
