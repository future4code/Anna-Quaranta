export interface Authenticator {
    id: string,
    email: string,
    role: "ADMIN" | "NORMAL"
}