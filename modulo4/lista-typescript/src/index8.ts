const verificarCarteira = (dataDeNascimento: string, emissaoCarteira: string): boolean => {
    const dataAtual = (new Date().getTime())

    const dataNascSplit = dataDeNascimento.split("/")
    const nasc = new Date(+dataNascSplit[2], + dataNascSplit[1] - 1, +dataNascSplit[0]).getTime()

    const dataEmissao = emissaoCarteira.split("/")
    const carteira = new Date(+dataEmissao[2], + dataEmissao[1] - 1, +dataEmissao[0]).getTime()

    const idade = (dataAtual - nasc) / (1000 * 60 * 60 * 24 * 365)
    const renovCarteira = (dataAtual - carteira) / (1000 * 60 * 60 * 24 * 365)

    if (idade <= 20 && renovCarteira === 5) {
        return true
    } else if (idade > 20 && idade <= 50 && renovCarteira === 10) {
        return true
    } else if (idade > 50 && renovCarteira === 15) {
        return true
    } else {
        return false
    }

}

console.log(verificarCarteira("07/09/2001", "07/11/2011"))