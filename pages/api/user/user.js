import prisma from "../prisma";
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

export default async function user(req, res) {
  if (req.method === "POST") {

try {
  
  const { username, firstname, lastname, password, email } =
  req.body;
  const hashpass = await bcrypt.hash(password,10)
  const newUser = await prisma.user.create({
    data: {
      username: username,
      password: hashpass,
      firstname: firstname,
      lastname: lastname,
      email: email,
    },
  });
  !newUser && res.status(400).json({msg:"sorry user not created"})
  // const {password,...others} = newUser
  res.status(200).json(newUser)
    
} catch (err) {
  res.status(500).json({ msg: "server error"+err });
  
}

  }

  if(req.method ==="GET"){
    if(req.body.token){
      const id = jwt.verify(req.body.token,process.env.secret).userId
      const checkUser = await prisma.user.findUnique({
        where:{
          id:id
        }
      })
      !checkUser && res.status(404).json({msg:"Invalid request"})
      if(checkUser.isAdmin===true){
  
        try {
          const users = await prisma.user.findMany();
          res.status(200).json(users);
        } catch (error) {
          res.status(500).json({ msg: "server error" });
        }
      }else{
        res.status(400).json({msg:"Only admins only!"})
      }
    }
    else{
res.status(400).json({msg:"token required"})
    }
res.status(200).json(req.body)
  }
  if(req.method ==="PUT"){

    try {
      const userid = await prisma.user.findUnique({
        where:{
          id:req.body.id
        },
        
      });
      !userid && res.status(400).json({msg:"you can only update your own account"})
      if(userid){
        const { username, firstname, lastname, password, email } =
  req.body;
  const hashpass = await bcrypt.hash(password,10)

        const updateUser = await prisma.user.update({
          where:{
            id:userid.id
          },
          data:{
            username:username,
            password:hashpass,
            email:email,
            firstname:firstname,
            lastname:lastname,

          }
        })
        res.status(200).json(updateUser)
      }
      // res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ msg: "server error" });
    }
  } 
  if(req.method==="DELETE"){
    const {id} = req.body
    try {
      const findUser = await prisma.user.findUnique({
        where:{
          id:id
        },
      })
      !findUser && res.status(400).json({msg:"user does not exit"})
      if(findUser){

        const deletedUser = await prisma.user.delete({
          where:{
            id:req.body.id
          }
        })
        
        res.status(200).json("user deleted successfully" )
      }
    } catch (error) {
      res.status(500).json({ msg: "server errors"+ error });
      
    }
  }
}
