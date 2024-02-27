import mongoose from 'mongoose'
import moongose from 'mongoose'

const PostScheme = new moongose.Schema(
    {
        description:{
            type:String,
            require:true
        },
        fecha:{
            type:Date,
            require:true
        },
        imagen:{
            type:String,
            require:false
        },
        user:{
            type:String,
            require:true
        }
    }
)

module.exports = mongoose.model('Posts',PostScheme)