export type DETAIL = {
    name: string,
    cpf: string,
    birthDate: string
}

export type STATEMENT = {
    value: number,
    date: string,
    description?: string
}

export type USER = {
    detail: DETAIL,
    bankBalance: number,
    bankStatement: []
}