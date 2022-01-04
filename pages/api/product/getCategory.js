import prisma from "../prisma";

export default async function getCategory(req, res) {
  if (req.method === "POST") {

      const fetchCat = await prisma.product.findMany({
        where: {
          category: req.body.id,
        },
      });
      res.status(200).json(fetchCat);
    } else{
      res.status(500).json({msg:"category not found"})
    }

}
