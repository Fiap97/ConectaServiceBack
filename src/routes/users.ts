import express from 'express'
import * as usersController from '../controllers/users'


const router = express.Router()

router.get('/',usersController.getUsers)


router.get('/:username',usersController.getUserByUsername)
 //   const id = Number.parseInt(req.params.id)

 //   const user = await usersController.getUserByUsername(req.params.username)
   // res.send(user)
   //console.log("routes get username"+user);
   
    //return user != null ? res.send(user) : res.send(404) 
    



router.post('/',usersController.createUser)

router.put('/:email',usersController.updateUser)


export default router