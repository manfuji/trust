import prisma from "../prisma";
const jwt = require("jsonwebtoken");

export default async function shipping(req, res) {
  if (req.method === "POST") {
    try {
      const { token, country, city, address, zipcode, orderId, username } =
        req.body;
      const verifyToken = jwt.verify(token, process.env.secret);
      const checkUser = await prisma.user.findUnique({
        where: {
          id: verifyToken.userId,
        },
      });
      if (checkUser) {
        const newshippingAddress = await prisma.shippingAddress.create({
          data: {
            country: country,
            city: city,
            address: address,
            zipcode: zipcode,
            user: checkUser.username,
          },
        });
        res.status(200).json(newshippingAddress);
      } else {
        res.status(400).json({ msg: "Only owners can add shippingAddress" });
      }
    } catch (err) {
      res.status(500).json("server Error" + err);
    }
  } else if (req.method === "GET") {
    const shippingAddress = await prisma.shippingAddress.findMany();
    res.status(200).json(shippingAddress);
  } else if (req.method === "PUT") {
    try {
      const { token, country, city, address, zipcode, orderId, id } = req.body;
      const verifyToken = jwt.verify(token, process.env.secret);
      const checkUser = await prisma.user.findUnique({
        where: {
          id: verifyToken.userId,
        },
      });
      if (checkUser) {
        const updateshippingAddress = await prisma.shippingAddress.update({
          where: {
            id: id,
          },
          data: {
            country: country,
            city: city,
            address: address,
            zipcode: zipcode,
          },
        });
        res.status(200).json(updateshippingAddress);
      } else {
        res.status(400).json({ msg: "Only owners can update shippingAddress" });
      }
    } catch (err) {
      res.status(500).json("server Error" + err);
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
      if (checkUser) {
        const shippingAddress = await prisma.shippingAddress.delete({
          where: {
            id: id,
          },
        });
        res.status(200).json(shippingAddress);
      } else {
        res.status(400).json({ msg: "Only owners can delete shippingAddress" });
      }
    } catch (err) {
      res.status(500).json("server Error" + err);
    }
  }
}
