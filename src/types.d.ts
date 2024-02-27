export interface User {
    name: string
    username: string
    email: string
    foto?:string
    birthdate:Date
    password:string
    confirmationPassword:string
}


export type NewUser = Omit<User,'id'>