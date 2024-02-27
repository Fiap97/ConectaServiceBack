/*import User from '../models/users'

const users: Array<User> = User


export const getUsers = (): Array<User> => users

export const findById = (id:number) : User | undefined => {
    const user = users.find(d => d.id === id )
    return user
}
/*
export const addUser = (NewUser:NewUser):User => {

    const newUser = {
        id: Math.max(...users.map( u => u.id)) +1 ,
       ...NewUser
    }
    users.push(newUser)
    return newUser
}
*/