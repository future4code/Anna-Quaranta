const meses: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const apresentarPessoa = (nome: string, dataDeNascimento: string): string => {

    const separarData = dataDeNascimento.split('/')
    const dia = separarData[0]
    const mes = +separarData[1]
    const ano = separarData[2]

    return (`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${meses[mes - 1]} do ano de ${ano}`)
}

console.log(apresentarPessoa("Bella", "07/09/2001"))