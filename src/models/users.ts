import mongoose from 'mongoose';

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        username:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        foto:{
            type:String,
            require:false
        },
        birthdate:{
            type:Date,
            require:true
        },
        password:{
            type:String,
        },
        confirmationPassword:{
            type:String
        },
        rol:{
            type:String
        },
        seguidores:{
            type:Array,
            require:false
        }

    }
)
module.exports = mongoose.model('Usuario',UserScheme)