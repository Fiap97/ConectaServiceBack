import express from 'express'
import * as postsController from '../controllers/posts'


const router = express.Router()


router.get('/',postsController.getPosts)

router.get('/:id',postsController.getPostById)

router.post('/',postsController.createdPost)


export default router