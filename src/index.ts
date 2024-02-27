import express from 'express'

import mongoose from 'mongoose'
 
import usersRouter from './routes/users'

import postsRouter from './routes/posts'


const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/ping', (req,res) => {
    console.log("tocame está   " + new Date().toLocaleDateString() + "    " +new Date().toTimeString());
    res.send('pong')
})

app.use('/api/users', usersRouter)

app.use('/api/posts',postsRouter)


mongoose.connect("mongodb+srv://fiap97:hesoyam@twitter.0y5ibsp.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Conectado a la base de datos"))
.catch((error)=> console.error(error)
)

app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto '+ PORT);
    
})