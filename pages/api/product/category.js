import prisma from "../prisma";
const jwt = require("jsonwebtoken");

export default async function category(req, res) {
  if (req.method === "POST") {
    try {
      const {
        token,
        catName,
        
      } = req.body;
      const verifyToken = jwt.verify(token, process.env.secret);
      const checkUser = await prisma.user.findUnique({
        where: {
          id: verifyToken.userId,
        },
      });
      if (checkUser.isAdmin) {
        const newcategory = await prisma.category.create({
          data: {
            catName: catName,
            
          },
        });
        res.status(200).json(newcategory);
      } else {
        res.status(400).json({ msg: "Only admins can add category" });
      }
    } catch (err) {
      res.status(500).json("server Error"+ err);
    }
  } else if (req.method === "GET") {
    const category = await prisma.category.findMany();
    res.status(200).json(category);
  } else if (req.method === "PUT") {
    try {
      const {
        token,
        catName,
        id
      } = req.body;
      const verifyToken = jwt.verify(token, process.env.secret);
      const checkUser = await prisma.user.findUnique({
        where: {
          id: verifyToken.userId,
        },
      });
      if (checkUser.isAdmin) {
        const updatecategory = await prisma.category.update({
          where: {
            id: id,
          },
          data: {
            catName:catName,
          },
        });
        res.status(200).json(updatecategory);
      } else {
        res.status(400).json({ msg: "Only admins can update category" });
      }
    } catch (err) {
      res.status(500).json("server Error"+err);
    }
  } else if (req.method === "DELETE") {
    try {
      const { token, id } = req.body;
      const verifyToken = jwt.verify(token, process.env.secret);
      const checkUser = await prisma.user.findUnique({
        where: {
          id: verifyToken.userId,
        },
      });
      if (checkUser.isAdmin) {
        const category = await prisma.category.delete({
          where: {
            id: id,
          },
        });
        res.status(200).json(category);
      } else {
        res.status(400).json({ msg: "Only admins can delete category" });
      }
    } catch (err) {
      res.status(500).json("server Error"+err);
    }
  }
}
