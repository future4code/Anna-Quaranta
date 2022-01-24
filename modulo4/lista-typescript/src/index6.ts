type ContaCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const clientesNegativados = (clientes: ContaCliente[]) => {

    const clientesNegativos = clientes.map((cliente) => {

        const divida = cliente.debitos.reduce((total, conta) => {
            return total + conta
        }, 0)

        if (cliente.saldoTotal - divida < 0) {
            return {
                cliente: cliente.cliente,
                saldoTotal: cliente.saldoTotal - divida,
                debitos: []
            }
        }
    }).filter((cliente) => {
        return cliente !== undefined
    })

    return clientesNegativos

}

console.log(clientesNegativados(clientes))