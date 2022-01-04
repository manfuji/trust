import prisma from "../prisma";
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken")
export default async function auth(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    try {
      const findUser = await prisma.user.findFirst({
        where: {
          username: username
        },
      });
      !findUser && res.status(404).json({ msg: "Invalid username" });
      if (findUser) {
        const checkPass = await bcrypt.compare(password, findUser.password);
        if (checkPass) {
            const token = jwt.sign({userId:findUser.id},process.env.secret,{expiresIn:"2h"})
            let data = {
             token,
            findUser
            }
          res.status(200).json(data);
        } else if (!checkPass) {
          res.status(400).json({ msg: "Invalid password" });
        }
      }
    } catch (error) {
      res.status(500).json({ msg: "server error" + error });
    }
  }
}
