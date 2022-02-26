export enum ROLE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type AuthenticationData = {
    id: string;
    role: ROLE;
}