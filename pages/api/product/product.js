import prisma from "../prisma";
const jwt = require("jsonwebtoken");

export default async function Product(req, res) {
  if (req.method === "POST") {
    try {
      const {
        token,
        productName,
        productPrice,
        slug,
        discountPrice,
        description,
        createdBy,
        category,
        imageUrl,
      } = req.body;
      const verifyToken = jwt.verify(token, process.env.secret);
      const checkUser = await prisma.user.findUnique({
        where: {
          id: verifyToken.userId,
        },
      });
      if (checkUser.isAdmin) {
        const newProduct = await prisma.product.create({
          data: {
            productName: productName,
            productPrice: parseInt(productPrice),
            slug: slug,
            category: category,
            createdBy: createdBy,
            imageUrl: imageUrl,
            description: description,
            discountPrice: discountPrice,
          },
        });
        res.status(200).json(newProduct);
      } else {
        res.status(400).json({ msg: "Only admins can add Product" });
      }
    } catch (err) {
      res.status(500).json({msg:"server Error"+ err});
    }
  } else if (req.method === "GET") {
    const product = await prisma.product.findMany({
      include:{
        Category:true
      }
    });
    res.status(200).json(product);
  } else if (req.method === "PUT") {
    try {
      const {
        token,
        productName,
        productPrice,
        slug,
        discountPrice,
        id,
        description,
        createdBy,
        category,
        imageUrl,
      } = req.body;
      const verifyToken = jwt.verify(token, process.env.secret);
      const checkUser = await prisma.user.findUnique({
        where: {
          id: verifyToken.userId,
        },
      });
      if (checkUser.isAdmin) {
        const updateProduct = await prisma.product.update({
          where: {
            id: id,
          },
          data: {
            productName: productName,
            productPrice: parseInt(productPrice),
            slug: slug,
            category: category,
            createdBy: createdBy,
            imageUrl: imageUrl,
            description: description,
            discountPrice: discountPrice,
          },
        });
        res.status(200).json(updateProduct);
      } else {
        res.status(400).json({ msg: "Only admins can update Product" });
      }
    } catch (err) {
      res.status(500).json({msg:"server Error"+err});
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
        const newProduct = await prisma.product.delete({
          where: {
            id: id,
          },
        });
        res.status(200).json(newProduct);
      } else {
        res.status(400).json({ msg: "Only admins can delete Product" });
      }
    } catch (err) {
      res.status(500).json({msg:req.body });
    }
  }
}
