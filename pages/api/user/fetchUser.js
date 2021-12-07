import prisma from "../prisma";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
export default async function fetchUser(req, res) {
  if (req.method === "POST") {
    if (req.body.token) {
      const id = jwt.verify(req.body.token, process.env.secret).userId;
      const checkUser = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      !checkUser && res.status(404).json({ msg: "Invalid request" });

      res.status(200).json(checkUser);
    } else {
      res.status(400).json({ msg: "User not found" });
    }
    res.status(200).json(req.body);
  }
}
