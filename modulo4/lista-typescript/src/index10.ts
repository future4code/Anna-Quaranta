const calculosDoCPF = (count: number, cpf: string[]): number => {
    let contador = count
    const arrayDeRespostas: number[] = []

    cpf.map((numero) => {
        arrayDeRespostas.push(+numero * contador)
        contador -= 1
    })

    let restoDaDivisao: number = (arrayDeRespostas.reduce((previousValue, currentValue) => previousValue + currentValue)) % 11

    if (11 - restoDaDivisao < 10) {
        return (11 - restoDaDivisao)
    } else {
        return (0)
    }
}


const verificarCPF = (cpf: string) => {

    //formatando cpf

    let cpfSplit = cpf.split("")
    cpfSplit = cpfSplit.filter((numero) => {
        return numero !== "." && numero !== "-"
    })

    var filtrado = cpfSplit.filter(function (elem, pos, arr) {
        return arr.indexOf(elem) == pos;
    });

    if (filtrado.length === 1) {
        return false
    }

    const ultimosDigitosCpf = cpfSplit.splice(9, 2)

    // variaveis usadas nas contas

    const ultimosDigitosConta: number[] = []

    ultimosDigitosConta.push(calculosDoCPF(10, cpfSplit))

    cpfSplit.push(ultimosDigitosConta[0].toString())

    ultimosDigitosConta.push(calculosDoCPF(11, cpfSplit))

    if (ultimosDigitosConta[0] === +ultimosDigitosCpf[0] && ultimosDigitosConta[1] === +ultimosDigitosCpf[1]) {
        return true
    } else {
        return false
    }
}

console.log(verificarCPF("222.222.222-22"))