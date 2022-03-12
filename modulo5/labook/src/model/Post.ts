export type Post = {
    id: string,
    photo: string,
    description: string,
    creationDate: Date,
    type: "NORMAL" | "EVENTO",
    id_user: string
}

export type DTOInputPost = {
    token: string | undefined
    photo: string,
    description: string,
    type: "NORMAL" | "EVENTO"
}