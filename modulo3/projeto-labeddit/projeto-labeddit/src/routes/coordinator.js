export const goToFeed = (history) => {
    history.push("/")
}

export const goToCreatePost = (history) => {
    history.push("/criarPost")
}

export const goToLogin = (history) => {
    history.push("/login")
}
export const goToCadastre = (history) => {
    history.push("/cadastrar")
}
export const goToPost = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToBack = (history) => {
    history.goBacK()
}
