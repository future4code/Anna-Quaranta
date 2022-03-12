export type DTOSignUpInputUser = {
    name: string,
    email: string,
    password: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type Login = {
    email: string,
    password: string
}