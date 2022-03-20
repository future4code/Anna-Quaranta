enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}


export interface signUpInputDTO {
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface UserInput {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
}