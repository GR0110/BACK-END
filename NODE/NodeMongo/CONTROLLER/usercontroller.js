const User = require("../MODELS/UserModel")
const userCreate = async(req, res)=>{
    try{
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).json(newUser)
    }
    catch(error){
        res.status(400).json({error:"bad Request"})
    }
}
module.exports= {userCreate}