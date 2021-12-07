import prisma from "../prisma";

export default async function single(req,res){
    if(req.method==="POST"){
        try {
            
            const product = await prisma.product.findUnique({
                where:{
                    id:req.body.id
                },
                include:{
                    Category:true
                }
            })
            !product && res.status(404).json({msg:"product not found"})
            res.status(200).json(product)
        } catch (error) {
            res.status(400).json({msg:req.body})
        }
    }
}