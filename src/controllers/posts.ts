
const Posts = require('../models/posts')


export const getPosts = async (req:any,res:any) => {
    const posts = await Posts.find();
    return res.send(posts)
}

export const getPostById = async (req:any,res:any) => {
    
    /*
    const id = req.params.id
    console.log("id: "+id);
    
    const post = await Posts.findOne({_id:ObjectId('id')});
    console.log("post: "+post);
    */

    const {id:postId} = req.params

    const post = await Posts.findById(postId)

    return post != null ? res.send(post) : res.sendStatus(404) 
}

export const createdPost = async (req:any,res:any) => {
    
    const { description, fecha , imagen, user } = req.body

    const createdPost = new Posts(
        {
            description,
            fecha,
            imagen,
            user
        }
    )

    await createdPost.save();

    if(createdPost){
        console.log("Post creado con exito");
        return res.json({message:"New Post",Posts:createdPost,status:200})
        
    }
}