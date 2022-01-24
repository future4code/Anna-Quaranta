enum SETORES {
    "MARKETING" = "marketing",
    "VENDAS" = "vendas",
    "FINANCEIRO" = "financeiro"
}

type Colaborador = {
    nome: string,
    salário: number,
    setor: SETORES,
    presencial: boolean
}

const colaborador1: Colaborador = { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true }

const colaborador2: Colaborador = { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false }

const colaborador3: Colaborador = { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true }

const colaborador4: Colaborador = { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false }

const colaborador5: Colaborador = { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true }

const colaborador6: Colaborador = { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true }

const colaborador7: Colaborador = { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }

const colaboradores = [colaborador1, colaborador2, colaborador3, colaborador4, colaborador5, colaborador6, colaborador7]

const filtrarColaboradores = (colaboradores: Colaborador[]): Colaborador[] => {
    return colaboradores.filter((colab) => {
        return colab.presencial === true && colab.setor === SETORES.MARKETING
    })
}

console.log(filtrarColaboradores(colaboradores))