const analisarNumeros = (num1: number, num2: number): void => {
    console.log("Soma:", num1 + num2)
    console.log("Subtração:", num1 - num2)
    console.log("Multiplicação:", num1 * num2)

    if (num1 > num2) {
        console.log(num1, "é maior que ", num2)
    } else if (num2 < num1) {
        console.log(num2, "é maior que ", num1)
    } else {
        console.log("Os números são iguais!")
    }
}

analisarNumeros(5, 5)