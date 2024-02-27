import { User } from "../types";

const Usuario= require('../models/users')


export const getUsers = async(req:any,res:any) => {
    const users = await Usuario.find();
    return res.send(users)
} 

export const getUserByUsername = async(req:any,res:any) => {
    const user = await Usuario.findOne({username: req.params.username})
    return user != null ? res.send(user) : res.send(404) 
   
}

export const createUser = async (req:any,res:any) => {

    const email = req.body.email

    const newUser =await Usuario.findOne({email:email})

    console.log("New user "+newUser);
    

    if(newUser){
        return res.send({error:"Usuario ya registrado"}).status(400)
    }else{
        const { name , username , email , birthdate , password , confirmationPassword , rol} =  req.body

        const createdUser = new Usuario ({
            name , 
            username ,
            email ,
            birthdate , 
            password , 
            confirmationPassword,
            rol
        }
        )

        console.log("new user "+newUser);

        await createdUser.save();
        
        if(createdUser){
            console.log("Usuario registrado con exito");
            return res.status(200).json({message:"new user",Usuario:createdUser,status:200})
        }
    }
}

export const updateUser = async (req:any,res:any)  => {

    const email = req.params.email

    const user = await Usuario.findOne({email:email})

    //console.log("user update: "+user);
    

    if(!user){
        return res.send("Usuario no existe").status(404)
    }
    else{
        /*
        const { name , username , email , birthdate , password , confirmationPassword , rol} =  req.body

        const updateUser = new Usuario ({
            name , 
            username ,
            email ,
            birthdate , 
            password , 
            confirmationPassword,
            rol
        })
    
   
        console.log("Usuario update: "+ updateUser);
        
        */
        const updateUser = await Usuario.findOneAndUpdate({email},req.body,{new:true});

        if(updateUser){
            console.log("Usuario actualizado con exito");
            return res.status(200).json({message:"update user",Usuario:updateUser,status:200})
        }
    }
}