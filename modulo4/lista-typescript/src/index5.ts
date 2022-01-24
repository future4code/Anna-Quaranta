type User = {
    name: string,
    email: string,
    role: string
}

const usuarios: User[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

const filtrarAdmin = (usuarios: {
    name: string;
    email: string;
    role: string;
}[]): string[] => {

    return usuarios.filter((user) => {
        return user.role === "admin"
    }).map((user) => {
        return user.email
    })

}

console.log(filtrarAdmin(usuarios))
