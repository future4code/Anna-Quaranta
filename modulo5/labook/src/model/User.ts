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

export type DTOInputLogin = {
    email: string,
    password: string
}

export type DTOInputFriendship = {
    token: string | undefined,
    id_user: string
}
export type Friendship = {
    id: string,
    id_user1: string,
    id_user2: string
}